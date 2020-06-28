import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = _ => {
  return (
    <View style={{ flex: 1 }}>
      <Header title='Allybums' />
      <AlbumList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
