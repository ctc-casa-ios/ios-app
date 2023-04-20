// @ts-nocheck
//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { render, waitFor, screen, fireEvent } from 'test-utils';

import { Context as AuthContext } from '../AuthContext';
jest.mock('../../navigationRef');
jest.mock('../../api/auth');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
//jest.mock('../../../@react-native-async-storage');

describe('login', () => {
  test('sets jwt token in state upon successful login', async () => {
    const expectedToken = '12345';
    const email = 'test@123.com';
    const password = 'hehe';

    // populate async storage with mock data
    //await AsyncStorage.setItem('token', '12345');

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
          <Text testID="signedIn">{state.isSignedIn}</Text>
          <Text testID="printed-token">{state.token}</Text>
        </View>
      );
    };

    render(<TestComponent email={email} password={password} />);

    fireEvent.press(screen.getByText('login-btn'));

    //const tokenOutput = await findByTestId('printed-token');
    expect(await screen.findByText(expectedToken)).toBeTruthy();

    //const signedInOutput = await screen.findByText('true');
    //expect(signedInOutput).toBeTruthy();
  });
});
