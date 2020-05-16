import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Player from './src/screens/Player';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import reducer from './src/reducers/reducer';

const store = createStore(reducer)

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscribe') {
            iconName = 'subscriptions';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Explore" component={Explore} />
        <Tabs.Screen name="Subscribe" component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="rootHome" component={RootHome} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="player" component={Player} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

