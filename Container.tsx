import React from 'react'
import Form from './src/screens/4.Form'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Center, View } from '@gluestack-ui/themed';

const Container = () => {
  return (
    <>
      <StatusBar style='auto' />

      <View style={styles.container}>
        <Form />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Container