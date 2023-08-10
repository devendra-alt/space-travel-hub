import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'; // Import Provider
import configureStore from 'redux-mock-store'; // Import configureStore
import Missions from '../components/Missions';

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
  missions: {
    loading: false,
    error: null,
    missions: [
      {
        mission_id: '1',
        mission_name: 'Mock Mission 1',
        description: 'Mock description 1',
        reserved: true,
      },
      {
        mission_id: '2',
        mission_name: 'Mock Mission 2',
        description: 'Mock description 2',
        reserved: false,
      },

    ],
  },
};
const store = mockStore(initialState);

test('Missions component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
