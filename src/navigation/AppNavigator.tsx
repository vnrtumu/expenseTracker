import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import BudgetScreen from '../screens/BudgetScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const EmptyComponent = () => null;

const CustomTabBarButton = ({ children, onPress }: { children: React.ReactNode, onPress?: (e: any) => void }) => (
  <TouchableOpacity
    style={styles.customButtonContainer}
    onPress={onPress}
  >
    <View style={styles.customButton}>
      {children}
    </View>
  </TouchableOpacity>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#3D8B8B',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused, color }) => focused ? <Text style={{ color, fontSize: 12 }}>Home</Text> : null,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicon name={focused ? 'home' : 'home-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: ({ focused, color }) => focused ? <Text style={{ color, fontSize: 12 }}>Transactions</Text> : null,
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={EmptyComponent}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('AddTransaction');
          },
        })}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <FeatherIcon name="plus" size={30} color="#fff" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{
          tabBarLabel: ({ focused, color }) => focused ? <Text style={{ color, fontSize: 12 }}>Budget</Text> : null,
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name="pie-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused, color }) => focused ? <Text style={{ color, fontSize: 12 }}>Profile</Text> : null,
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  customButtonContainer: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3D8B8B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3D8B8B',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});

export default AppNavigator;
