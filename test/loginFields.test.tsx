import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import LoginField from '../src/components/LoginFields';

describe('LoginField', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<LoginField />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it('hides password input', () => {
    const { getByPlaceholderText } = render(<LoginField />);
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.changeText(passwordInput, 'password');
    expect(passwordInput.props.secureTextEntry).toBe(true);
  });
});
