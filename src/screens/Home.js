import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Card from '../components/Card';
import Constant from 'expo-constants';

function Home() {
  const cardData = useSelector(state=>{
    return state
  })
  return (
    <View style={{flex:1}}>
        <Header />
        <FlatList
          
          data={cardData}
          renderItem = {({item}) => {
            return <Card videoId={item.id.videoId} title={item.snippet.title} channel={item.snippet.channelTitle} />
          }}
          keyExtractor={item=>item.id.videoId}
        />
    </View>
  );
}

export default Home;