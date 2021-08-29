import React from 'react';
import { FlatList, Text, View } from 'react-native'
import ChatItem from '../components/ChatItem';

const people = [
    {
        username:'Daniel Sumah',
        last_message: 'Hey, will you be available',
        time:'8:39PM',
        image_url:'https://picsum.photos/60'
    },
    
    {
        username:'Emmanuel',
        last_message: 'Guy, Check your message, respond quickly',
        time:'yesterday',
        image_url:'https://picsum.photos/60'
    },
    {
        username:'Mulikat',
        last_message: 'How is Abuja treating you?',
        time:'12:00PM',
        image_url:'https://picsum.photos/60'
    },
    {
        username:'Amina',
        last_message: 'Share repo link',
        time:'1:35PM',
        image_url:'https://picsum.photos/60'
    },
    {
        username:'Amina',
        last_message: 'Share repo link',
        time:'1:35PM',
        image_url:'https://picsum.photos/60'
    },
    {
        username:'Emmanuel',
        last_message: 'Guy, Check your message, respond quickly',
        time:'yesterday',
        image_url:'https://picsum.photos/60'
    },
    {
        username:'Mulikat',
        last_message: 'How is Abuja treating you?',
        time:'12:00PM',
        image_url:'https://picsum.photos/60'
    },

]

const Chats = ()=>{
    return (
        <View>
            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <ChatItem item={item}/>
                )}
            />
            
        </View>
    )
}

export default Chats;