import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getQuote } from './quotesService'

const response = { test: 'testing' };

// Servidor fictício - retorna response
const url = process.env.REACT_APP_QUOTES_API;
const server = setupServer(
    rest.get(`${url}`, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transforms json response into object', async () => {
    const quote = await getQuote();

    // Resposta do servidor igual a response
    expect(quote).toStrictEqual(response);
});