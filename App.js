import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import HomeScreen from './components/Home.js';
import Browse from './components/Browse.js'
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './store/reducers.js';
import {actionChangeJSON} from './store/actions.js';

const Stack = createStackNavigator();

const store = createStore(reducer);

const App = () => {
  return(
    <Provider store = {store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Browse" component={Browse} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
