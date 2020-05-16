import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Constant from 'expo-constants';

function Header() {
  const navigation = useNavigation()
  const mycolor = "#212121";

  return (
    <View style={{
        marginTop: Constant.statusBarHeight,
        height:45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation:4
    }}>
      <View style={{flexDirection: 'row', margin:5}}>
          <AntDesign style={{marginLeft: 20}} name="youtube" size={28} color="red" />
          <Text style={{fontSize:22, marginLeft:5, fontWeight:'bold', color:mycolor }}>YouTube</Text>
      </View>
      <View style={{flexDirection: 'row', margin:5, justifyContent: 'space-between', width:150}}>
           <Ionicons name="md-videocam" size={32} color='#212121' />
           <Ionicons onPress={()=>navigation.navigate("search")} name="md-search" size={32} color='#212121' />
           <MaterialIcons name="account-circle" size={32} color='#212121' />
      </View>
    </View>
  );
}

export default Header;