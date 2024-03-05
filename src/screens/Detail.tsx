import React from 'react'
import { Button, Text, View } from 'react-native'

const Detail = ({ route, navigation }: any) => {
  console.log(route)
  const { itemId, otherParam } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <Text>Item ID : {itemId}</Text>
      <Text>Other : {otherParam}</Text>
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          otherParam: `Pinjem uang ${itemId}` 
        })}
        // onPress={() => navigation.navigate('Details')}
      /> */}
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

export default Detail