import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler'


export default function Main({navigation}) {
  const[info, setInfo] = useState([])
  const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-12-20&sortBy=publishedAt&apiKey=fb10e9c404ac4aec830b6817ae0a049d'
  const url1 = 'https://rickandmortyapi.com/api/character?'
  useEffect(() => {
    fetch(url1)
    .then(res => res.json())
    .then(result => setInfo(result.results))
  },[])

  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={info} renderItem={({item}) => (
        <TouchableOpacity key={item.id} style={styles.character} onPress={() => navigation.navigate('Article', item)}>
          <Text style={styles.text}>{item.name}</Text>
          <Image style={styles.image} source={ {
            uri: item.image
          }}
          />
        </TouchableOpacity>
      )}/>

    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    
  },
  container: {
    bacgroundColor: '#f4f4f4',
  },
  character: {
    alignItems: "center",
    margin: 5,
    borderRadius: '7px',
    borderWidth: 1,
    borderColor: 'silver',
    padding: 5
  },
  text: {
    fontSize: 10,
    color: '#872543',
    margin: 2,
    textAlign: 'center'
  },
  image: {
    width: '50%',
    height: 200,
    borderRadius: '10px',
  }
});