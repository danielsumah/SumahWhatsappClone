import React from 'react';
import { Text, View } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.header}> 
            <Text style={styles.header_text}>WhatsApp</Text>
        </View>
    )
}


const HeaderRight =()=>{
    return(
        <View style={styles.icons}>
            <FontAwesome name="search" size={22} color="white" />
            <Entypo style={styles.menu} name="dots-three-vertical" size={22} color="white" />
        </View>
    )
}

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    header_text:{
        fontSize:24,
        color:'white',
        fontWeight:'bold',
        marginRight:'auto',
        },
    icons:{
        flexDirection:'row',
    },
    menu:{
        marginLeft:20,
    }
})

export {Header, HeaderRight};

