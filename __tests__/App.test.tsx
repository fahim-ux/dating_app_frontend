/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { PropsWithChildren } from 'react';

// Mock the entire @react-navigation modules
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }: PropsWithChildren<any>) => <>{children}</>,
    Screen: ({ children }: PropsWithChildren<any>) => <>{children}</>
  })
}));

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: PropsWithChildren<any>) => <>{children}</>
}));

// Mock the StartupNavigator
jest.mock('../src/Navigation/StartupNavigator', () => {
  const MockNavigator = (): JSX.Element => <></>;
  return MockNavigator;
});

// Now import App after the mocks are set up
import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});

// You have a duplicate test - remove this one or give it a different name
test('renders without crashing', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
