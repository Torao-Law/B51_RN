import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { IThread } from '../interface/threads';

const ThreadCard = (props: IThread) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.image}} style={{width: 100, height: 100}} alt='thrads' />
      <Text>{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    // flexDirection: 'row',
    alignItems: 'center'
  }
})

export default ThreadCard