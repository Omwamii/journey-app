import { View, Text } from '@/components/Themed'
import data from '@/constants/data'
import { FlatList, StyleSheet } from 'react-native'
import EntryMediaItem from '@/components/EntryMediaItem'
import { SafeAreaView } from 'react-native-safe-area-context'

const media = () => {
  return (
    <SafeAreaView style={styles.mediaContainer}>
      <Text style={{ alignSelf: 'flex-start', marginBottom: 10, marginLeft: 10 }}>Media files</Text>
        <FlatList 
          data={data}
          renderItem={({ item }) => (<EntryMediaItem entry={item} />)}
          contentContainerStyle={{ gap: 10 }}
          numColumns={2}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mediaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  }
})

export default media