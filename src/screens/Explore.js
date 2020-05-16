import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Card from '../components/Card'
import { ScrollView } from 'react-native-gesture-handler';

const LittleCard = (props)=> {
    return(
        <View style={{
            backgroundColor: "red",
            height: 50,
            width: 180,
            borderRadius: 4,
            marginTop:10
        }}>
            <Text style={{
                textAlign: 'center',
                color:'white',
                fontSize:22,
                marginTop:5
            }}>{props.name}</Text>
        </View>
        
    )
}

function Explore() {
    const cardData = useSelector(state=>{
        return state
    })
    return (
        <View style={{flex:1}}>
            <Header />
            <ScrollView>
                <View style={{
                    flexDirection:'row',
                    flexWrap: 'wrap',
                    justifyContent:'space-around'
                }}>
                    <LittleCard name="Gaming" />
                    <LittleCard name="Trending" />
                    <LittleCard name="Movies" />
                    <LittleCard name="News" />
                    <LittleCard name="Music" />
                    <LittleCard name="Fashion" />
                </View>
                
                <Text style={{margin:8, fontSize:22, borderBottomWidth:1}} >Trending Videos</Text>
                <FlatList
                    data={cardData}
                    renderItem = {({item}) => {
                        return <Card videoId={item.id.videoId} title={item.snippet.title} channel={item.snippet.channelTitle} />
                    }}
                    keyExtractor={item=>item.id.videoId}
                />
            </ScrollView>
        </View>
    )
}

export default Explore
