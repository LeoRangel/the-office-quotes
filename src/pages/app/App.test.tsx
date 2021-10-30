import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

const quoteResponse = {
    data: {
        content: 'Test quote',
        character: {
            firstname: 'First Name',
            lastname: 'Last Name',
        }
    }
};

// Servidor fictício - retorna quoteResponse
const url = process.env.REACT_APP_QUOTES_API;
const server = setupServer(
    rest.get(`${url}`, (req, res, ctx) => {
        return res(ctx.json(quoteResponse));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the App with a button, a quote and an image', () => {
    render(<App />);

    const quoteEl = screen.getByRole('figure');
    const buttonEL = screen.getByRole('button');
    const imageEl = screen.getByRole('img');

    expect(buttonEL).toBeInTheDocument();
    expect(quoteEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
});

test('calls api on startup and renders it response', async () => {
    render(<App />);

    const quoteEl = await screen.findByText(`"${quoteResponse.data.content}"`)

    expect(quoteEl).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    const quoteEl = await screen.findByText(`"${quoteResponse.data.content}"`);

    const speakerName = `- ${quoteResponse.data.character.firstname} ${quoteResponse.data.character.lastname}`;
    const speakerEl = await screen.findByText(speakerName);

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
});