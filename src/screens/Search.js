import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants';

function Search({navigation}) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const miniCardData = useSelector(state=> {
        return state;
    })
    // const [miniCardData, setminiCardData] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = ()=> {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}&type=video&key=AIzaSyDImiKKWS2qCFnJoM-qWksjzeJgo0qdmZw`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            dispatch({type:"add", payload: data.items})
            // setminiCardData(data.items)
        })
    }

    return (
        <View style={{flex:1, marginTop: Constant.statusBarHeight}}>
            <View style={{padding:5, flexDirection:'row', justifyContent:'space-around', elevation:5, backgroundColor:'white'}}>
                <Ionicons onPress={()=> navigation.goBack()} name="md-arrow-back" size={32} />
                <View style={{width:"70%", backgroundColor:'#e6e6e6'}}>
                    <TextInput
                        style={{backgroundColor:'#e6e6e6', paddingLeft:6, paddingTop:2, paddingRight:6}}
                        placeholder='Search'
                        value={value}
                        onChangeText={(text)=> setValue(text)}
                    />
                </View>
                <Ionicons name="md-send" size={32} onPress={()=> fetchData()} />
            </View>
            {loading ? <ActivityIndicator size="large" color="red" style={{marginTop:10}} /> : null} 
            <FlatList
                data = {miniCardData}
                renderItem = {({item}) => {
                    return <MiniCard videoId={item.id.videoId} title={item.snippet.title} channel={item.snippet.channelTitle} />
                }}
                keyExtractor={item=>item.id.videoId}
            />
        </View>
    )
}

export default Search;