import '@testing-library/jest-dom';
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from '../App';
import renderWithProviders from '../../storeProvider';

describe('App render correctly', () => {
  it('should render correctly', () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/Space Traveler's Hub/i)).toBeInTheDocument();
  });
  it('should reserve rocket rocket', async () => {
    renderWithProviders(<App />);
    await waitForElementToBeRemoved(screen.getByRole('status'));
    const reserveBtn = screen.getAllByText(/Reserve Rocket/i);
    fireEvent.click(reserveBtn[0]);
    expect(screen.getByText(/Reserved/i)).toBeInTheDocument();
  });
  it('should cancel reserved rocket', async () => {
    renderWithProviders(<App />);
    await waitForElementToBeRemoved(screen.getByRole('status'));
    const reserveBtn = screen.getAllByText(/Reserve Rocket/i);
    fireEvent.click(reserveBtn[0]);
    const cancelBtn = screen.getByText(/Cancel Reservation/i);
    fireEvent.click(cancelBtn);
    expect(screen.queryByText(/Cancel Reservation/i)).not.toBeInTheDocument();
  });
  it('should display image on screen', async () => {
    renderWithProviders(<App />);
    await waitForElementToBeRemoved(screen.getByRole('status'));
    const Images = screen.getAllByRole('img');
    expect(Images.length).toBe(5);
  });
});

describe('snapshot test', () => {
  it('should pass snapshot test', () => {
    expect(renderWithProviders(<App />)).toMatchSnapshot();
  });
});
