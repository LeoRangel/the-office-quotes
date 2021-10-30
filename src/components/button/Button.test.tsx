import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders a button with a text', () => {
    render(<Button>Text</Button>);

    const buttonText = screen.getByText(/Text/i);

    expect(buttonText).toBeInTheDocument();
})