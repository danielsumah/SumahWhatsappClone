import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './MainNavigation';
import {Header, HeaderRight} from '../components/Header';

const Stack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                  backgroundColor: '#128C7E',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitle: ()=>(<Header/>),
                headerRight: ()=>(<HeaderRight/>),
                headerShadowVisible:false,
                
                
              }}
        >
            <Stack.Screen 
                name="Main" 
                component={MainNavigation}
                options={
                    {
                        // headerTitle: ()=>(<Header/>),
                        // headerRight: ()=>(<HeaderRight/>)
                    }
                }
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigator;