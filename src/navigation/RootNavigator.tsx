import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  // In a real app, this would be managed by your auth state (e.g., Redux, Context API)
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true to see the main app

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
