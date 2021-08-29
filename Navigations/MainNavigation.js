import React from 'react';
import { Dimensions } from 'react-native'
import Calls from '../screens/Calls';
import Chats from '../screens/Chats';
import Status from '../screens/Status';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Camera from '../screens/Camera';

const Tab = createMaterialTopTabNavigator();

function MainNavigation() {
  return (
    <NavigationContainer
        independent={true}
    >
        <Tab.Navigator
            initialRouteName='Chats'
            // initialLayout={{ width: Dimensions.get('window').width }} 
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14, color:'#fff' },
                tabBarStyle: { backgroundColor: '#128C7E' },
                tabBarIndicatorStyle:{backgroundColor:'#fff'}
              }}
              
        >
            <Tab.Screen 
                name="Camera" 
                component={Camera} 
                options={{
                    tabBarIcon:()=><FontAwesome name="camera" size={20} color="white" />,
                    tabBarShowLabel:false,
                    // tabBarStyle:{width:50}
                }}
            />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Status" component={Status} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;