import { render, screen } from '@testing-library/react';
import GreatNovels from './GreatNovels';

test('renders learn react link', () => {
  render(<GreatNovels />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
