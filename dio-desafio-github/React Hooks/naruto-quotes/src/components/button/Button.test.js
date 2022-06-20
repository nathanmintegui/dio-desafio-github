import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
    render(<button>Test</button>)

    const buttonEl = screen.getByText('Test');

    expect(buttonEl).toBeInTheDocument();
});


