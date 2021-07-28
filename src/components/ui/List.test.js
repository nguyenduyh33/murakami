import { render, screen } from '@testing-library/react';
import List from './List';

describe('List Component', () => {
  test('renders loading text when isLoading is true', () => {
    render(<List isLoading />);

    const loadingElement = screen.getByText('Loading...');

    expect(loadingElement).toBeInTheDocument();
  });

  test('renders error when error is populated', () => {
    const errorMessage = 'something bad happened!';
    render(<List error={errorMessage} />);

    const errorElement = screen.getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });

  test('renders no results text when isLoading is false and there are no items', () => {
    render(<List />);

    const noResultsElement = screen.getByText('No results');

    expect(noResultsElement).toBeInTheDocument();
  });

  test('renders a list when is Loading is false and there are items to display', () => {
    const items = ['item1', 'item2'];
    render(<List items={items} />);

    const listElement = screen.getByRole('list');

    expect(listElement).toBeInTheDocument();
  });
});
