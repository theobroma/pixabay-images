import { act, render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Layout/Footer', () => {
  it('should have github link', () => {
    act(() => {
      render(<Footer />);
    });

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeDefined();
    const regex = /(?=.*?\bgithub\b)^.*$/;
    expect(githubLink.getAttribute('href')).toMatch(regex);
  });
});
