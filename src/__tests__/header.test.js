import '@testing-library/jest-dom';
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from '../../storeProvider';

describe('navigation test', () => {
  it('should navigate to profile', async () => {
    await renderWithProviders(<App />);
    let profileLink = await screen.getByText(/Profile/i);
    fireEvent.click(profileLink);
  });
});
