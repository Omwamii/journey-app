import { View, Text } from "./Themed"
import { Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const EntryItem = ({ entry }) => {
  console.log("entry date", entry.image)

  return (
    <Link href={`/entries/${entry.id}`}>
      <View style={styles.entry}>
        <View style={styles.entryInfo}>
          <Text style={styles.entryTime}>{entry.time}</Text>
          <Text>Entry {entry.id}</Text>
        </View>
        <View>
          <Image source={entry.image} style={styles.entryImage} />
        </View>
      </View>
    </Link>
  )
}

export default EntryItem

const styles = StyleSheet.create({
  entryTime: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  entry: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    padding: 5,
    // borderColor: 'gainsboro',
    // borderWidth: 1,
    // borderStyle: 'solid',
    borderRadius: 12,
    backgroundColor: '#333533',
  },
  entryImage: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    backgroundColor: '#333533',
  },
  entryInfo: {
    backgroundColor: '#333533',
    padding: 5,
  }
});
