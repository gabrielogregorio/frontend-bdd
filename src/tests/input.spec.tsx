import { render, screen } from '@testing-library/react';

describe('should test input component', () => {
  it('should render input', () => {
    render(<div>aaaa</div>);

    expect(screen.getByText(/aaaa/i)).toBeDefined();
  });
});
