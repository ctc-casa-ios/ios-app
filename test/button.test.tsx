// Jest Test
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/Button';
import 'jest';

describe('Button', () => {
  it('should render correctly', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<Button title="Test" onPress={mockOnPress} />);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const bcmpnt = render(<Button title="Test" onPress={mockOnPress} />);

    const { getByText } = bcmpnt;

    const button = getByText('Test');

    fireEvent(button, 'press');
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
