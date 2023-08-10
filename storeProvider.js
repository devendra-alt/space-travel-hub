import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import rocketsReducer from './src/redux/rockets/features/rocketsSlice';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { rockets: rocketsReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
