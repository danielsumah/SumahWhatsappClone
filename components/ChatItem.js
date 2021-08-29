import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ChatItem = ({ item }) => {
    return (
        <View style={styles.chat_container}>
            <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
                style={styles.avatar}
            />
            <View style={styles.chat_details}>
                <View style={styles.chat_details_top}>
                    <View style={styles.username}>
                        <Text style={styles.username_text}>{item.username}</Text>
                    </View>
                    
                    <View>
                        <Text style={styles.chat_time}>{item.time}</Text>
                    </View>
                </View>

                <View style={styles.chat_details_top}>
                    <Feather name="check" size={16} color="black" />
                    <Text 
                        numberOfLines={1}
                        style={styles.last_message}
                    >
                        {item.last_message}
                    </Text>
                </View>
                
            </View>
        </View>
    )
}

export default ChatItem;

const styles = StyleSheet.create({
    chat_container:{
        flexDirection:'row',
        // backgroundColor:'green',
        alignItems: 'center',
        paddingHorizontal:10,
        paddingVertical:10,
    },
    avatar:{
        width:60,
        height:60,
        backgroundColor:'#0000FF',
        borderRadius: 30,
        marginRight:10,
    },
    chat_details:{
        // backgroundColor:'yellow',
        // width:'100%'
    },
    chat_details_top:{
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red',
    },
    username:{
        marginRight:'auto',
        width:'65%'
    },
    username_text:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:3,
    },
    chat_time:{
        fontSize:12,
    },
    last_message:{
        fontSize:14,
        width:'65%'
    }
})