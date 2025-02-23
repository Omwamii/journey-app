import { Image, StyleSheet } from 'react-native'

const EntryMediaItem = ({ entry }) => {
  return (
    <Image 
        source={entry.image}
        style={styles.imageStyles}
    />
  )
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 150,
        height: 120,
        resizeMode: 'cover',
        borderColor: 'green',
        borderWidth: 1,
        borderStyle: 'solid',
    }
})

export default EntryMediaItem;