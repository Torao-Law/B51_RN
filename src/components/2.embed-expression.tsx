import React from 'react'
import { Alert, Button, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Thread() {
  const text: string = 'Congratulations.. you get a surprise !!'

  const sayHello = () => {
    return Alert.alert("Bayar Hutang", "Bang ayolah bayar 🗿🗿")
  } 
  return (
    <>
      <Text>{text}</Text>

      <Button 
        title='Click Here'
        onPress={sayHello}
      />

    <Pressable style={styles.button} onPress={sayHello}>
      <Text>Click Here</Text>
    </Pressable>


    <TouchableOpacity style={styles.buttons} onPress={() => alert("passwordnya apa ?")}>
      <Text>Click Here</Text>
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green"
  },
  buttons: {
    backgroundColor: "pink"
  }
})
