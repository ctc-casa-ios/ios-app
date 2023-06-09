import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomTabNavigator from '../src/components/BottomTabNavigator';

describe('BottomTabNavigator', () => {
  test('renders correctly', () => {
    const { getByText } = render(<BottomTabNavigator navigation={{ navigate: jest.fn() }} />);

    const myCasesButton = getByText('My Cases');
    const createButton = getByText('Create');
    const accountButton = getByText('Account');

    expect(myCasesButton).toBeDefined();
    expect(createButton).toBeDefined();
    expect(accountButton).toBeDefined();
  });

  test('navigates to the correct screen when buttons are pressed', () => {
    const navigateMock = jest.fn();
    const { getByText } = render(<BottomTabNavigator navigation={{ navigate: navigateMock }} />);

    const myCasesButton = getByText('My Cases');
    fireEvent.press(myCasesButton);
    expect(navigateMock).toHaveBeenCalledWith('CaseContactList');

    const createButton = getByText('Create');
    fireEvent.press(createButton);
    expect(navigateMock).toHaveBeenCalledWith('CaseContactList');

    const accountButton = getByText('Account');
    fireEvent.press(accountButton);
    expect(navigateMock).toHaveBeenCalledWith('AccountScreen');
  });
});
