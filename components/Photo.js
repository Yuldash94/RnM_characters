import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

export default function Photo({route}) {
  return (
    <View style={styles.character}>
          <Text style={styles.text}>{route.params.name}</Text>
          <Image style={styles.image} source={ {
            uri: route.params.image
          }}
          />
          <Text style={{alignSelf: 'flex-end', fontSize: '7px'}}>{route.params.species}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  character: {
    alignItems: "center",
    marginTop: 10,
    borderRadius: '7px',
    borderWidth: 1,
    borderColor: 'silver',
    padding: 5,
    margin: 5
  },
  text: {
    fontSize: 22,
    color: '#872543',
    margin: 15
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: '10px',
  }
});