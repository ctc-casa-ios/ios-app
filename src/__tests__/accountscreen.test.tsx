import AsyncStorage from '@react-native-async-storage/async-storage';
import { screen, fireEvent, render, userEvent } from '@testing-library/react-native';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';

import App from '../../App';
import AccountScreen from '../screens/AccountScreen';
import { renderWithProviders } from '../test-utils/test-utils';

const handlers = [
  http.delete('https://casa-qa.herokuapp.com//api/v1/users/sign_out', () => {
    return HttpResponse.json({ message: 'Signed out successfully.' }, { status: 200 });
  }),
  http.get('https://casa-qa.herokuapp.com//api/v1/users/sign_in', () => {
    return HttpResponse.json(
      {
        id: 1,
        isSignedIn: true,
        api_token: 'aaaa',
        refresh_token: 'bbbb',
        user: {
          id: 1,
          display_name: 'Test User',
          email: 'test@test.com',
          refresh_token_expires_at: '2022-01-01T00:00:00.000Z',
          token_expires_at: '2022-01-01T00:00:00.000Z',
        },
      },
      { status: 201 }
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('AccountScreen', () => {
  it('renders two user data fields and one button', () => {
    renderWithProviders(<AccountScreen />);

    // Two Text elements for user display name and email should be rendered
    expect(screen.getByTestId('user:display_name')).toBeOnTheScreen();
    expect(screen.getByTestId('user:email')).toBeOnTheScreen();

    // One Button element for sign out should be rendered
    expect(screen.getByRole('button', { name: 'Sign out' })).toBeOnTheScreen();
  });

  it('clears async storage when the sign out button is pressed', async () => {
    renderWithProviders(<AccountScreen />);

    const signOutButton = screen.getByRole('button', { name: 'Sign out' });

    // Press the sign out button
    fireEvent.press(signOutButton, 'onPress');

    // async storage should be cleared
    expect(await AsyncStorage.clear()).toHaveBeenCalledTimes(1);
  });

  it('navigates to the login screen when the sign out button is pressed', async () => {
    render(<App />);

    const user = userEvent.setup();
    const signInButton = screen.getByRole('button', { name: 'Sign In' });
    // Press the sign in button
    await user.press(signInButton);

    const accountScreenButton = screen.getByRole('button', { name: 'Account' });
    await user.press(accountScreenButton);

    expect(screen.getByText('Test User')).toBeOnTheScreen();
    expect(screen.getByText('test@test.com')).toBeOnTheScreen();

    const signOutButton = screen.getByRole('button', { name: 'Sign out' });
    // Press the sign out button
    await user.press(signOutButton);

    // The user should be navigated to the sign-in screen
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeOnTheScreen();
  });
});
