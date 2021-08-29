import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import MainNavigation from './Navigations/MainNavigation';
import RootStackNavigator from './Navigations/RootNavigator';

export default function App() {
  return (
    <RootStackNavigator/>
    // <View style={styles.container}>
    //   <Header/>
    //   <MainNavigation/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
