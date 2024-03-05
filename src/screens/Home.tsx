import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = (props: any) => {
  // const object: object = {
  //   itemId: 86,
  //   otherParam: 'anything you want here',
  // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => props.navigation.navigate('Profile', { name: "Bang tes 123"})}
      />
    </View>
  )
}

export default Home