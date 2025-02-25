import { Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

const EntryMediaItem = ({ entry }) => {
  return (
    <Link href={`/entries/${entry.id}`}>
      <Image 
          source={entry.image}
          style={styles.imageStyles}
      />
    </Link>
  )
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 150,
        height: 120,
        resizeMode: 'cover',
        marginRight: 10,
    }
})

export default EntryMediaItem;