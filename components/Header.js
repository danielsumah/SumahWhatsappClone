import React from 'react';
import { Text, View } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.header}> 
            <Text style={styles.header_text}>WhatsApp</Text>
            <View style={styles.icons}>
                <FontAwesome name="search" size={22} color="white" />
                <Entypo style={styles.menu} name="dots-three-vertical" size={22} color="white" />
            </View>
        </View>
    )
}


import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#128C7E',
        paddingTop:30,
        paddingBottom:20,
        flexDirection:'row',
        paddingHorizontal:10,
    },
    header_text:{
        fontSize:24,
        color:'white',
        marginRight:'auto',
        fontWeight:'bold'
    },
    icons:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    menu:{
        marginLeft:20,
    }
})

export default Header;

