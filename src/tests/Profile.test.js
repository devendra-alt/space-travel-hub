import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../components/Profile';

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
  rockets: {
    rockets: [
      {
        id: '1',
        name: 'Falcon 9',
        reserved: true,
        wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9',
      },
    ],
  },
  missions: {
    missions: [
      {
        mission_id: '1',
        mission_name: 'Mock Mission 1',
        reserved: true,
      },
    ],
  },
};
const store = mockStore(initialState);

test('Profile component renders correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
