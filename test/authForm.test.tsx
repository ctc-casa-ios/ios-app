import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import AuthForm from '../src/components/AuthForm';

describe('AuthForm', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <AuthForm submitButtonText="Log in" onSubmit={() => {}} />
    );
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it('hides password input', () => {
    const { getByPlaceholderText } = render(
      <AuthForm submitButtonText="Log in" onSubmit={() => {}} />
    );
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.changeText(passwordInput, 'password');
    expect(passwordInput.props.secureTextEntry).toBe(true);
  });
});
