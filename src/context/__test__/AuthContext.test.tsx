// @ts-nocheck
//import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { render, waitFor, screen, fireEvent } from 'test-utils';

import { Context as AuthContext } from '../AuthContext';
jest.mock('../../navigationRef');
jest.mock('../../api/auth');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
//jest.mock('../../../@react-native-async-storage');

describe('auth context', () => {
  beforeEach(() => {
    const email = 'test@123.com';
    const password = 'hehe';

    const TestComponent = ({ email, password }) => {
      const { state, signin, signout } = useContext(AuthContext);

      return (
        <View>
          <Button
            title="login-btn"
            onPress={() => {
              signin({ email, password });
            }}
          />
          <Button
            title="logout-btn"
            onPress={() => {
              signout();
            }}
          />
          {state.isSignedIn && <Text testID="printed-token">{state.token}</Text>}
        </View>
      );
    };
    render(<TestComponent email={email} password={password} />);
  });

  test('sets jwt in app state upon successful login', async () => {
    const expectedToken = '12345';

    fireEvent.press(screen.getByText('login-btn'));

    expect(await screen.findByText(expectedToken)).toBeTruthy();
    waitFor(async () => {
      expect(AsyncStorage.setItem).toHaveBeenCalled();
    });
  });

  test('removes jwt from app state upon logout', async () => {
    fireEvent.press(screen.getByText('logout-btn'));

    waitFor(async () => {
      expect(AsyncStorage.removeItem).toHaveBeenCalled();
    });
  });
});

describe('auth error', () => {
  test('shows error message upon unsuccessful login', async () => {
    const expectedErrMsg = 'Something went wrong with sign in.';
    const email = 'test@122.com';
    const password = 'hehe';

    const TestComponent = ({ email, password }) => {
      const { state, signin } = useContext(AuthContext);

      return (
        <View>
          <Button
            title="login-btn"
            onPress={() => {
              signin({ email, password });
            }}
          />
          {state.isSignedIn && <Text testID="printed-token">{state.token}</Text>}
          <Text>{state.errorMessage}</Text>
        </View>
      );
    };

    render(<TestComponent email={email} password={password} />);

    fireEvent.press(screen.getByText('login-btn'));

    expect(await screen.findByText(expectedErrMsg)).toBeTruthy();
  });
});
