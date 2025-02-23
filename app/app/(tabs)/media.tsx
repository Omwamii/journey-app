import { View, Text } from '@/components/Themed'
import data from '@/constants/data'
import { FlatList, StyleSheet } from 'react-native'
import EntryMediaItem from '@/components/EntryMediaItem'

const media = () => {
  return (
    <View style={styles.mediaContainer}>
      <Text>Media files</Text>
        <FlatList 
          data={data}
          renderItem={({ item }) => (<EntryMediaItem entry={item} />)}
          contentContainerStyle={{ gap: 10 }}
          numColumns={2}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mediaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 0,
  }
})

export default media