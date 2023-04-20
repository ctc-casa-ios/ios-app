/**
 * It's often useful to define a custom render method that includes things like global context providers, data stores, etc.
 * To make this available globally, one approach is to define a utility file that re-exports everything from React Native Testing Library.
 * You can replace React Native Testing Library with this file in all your imports.
 */
import { render } from '@testing-library/react-native';
import React from 'react';

import { Provider as AuthProvider } from '../src/context/AuthContext';

const AllTheProviders = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
