import { View, Text } from "./Themed"
import { Image, StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";

const EntryItem = ({ entry }) => {
  const colorScheme = useColorScheme();

  return (
    <Link href={`/entries/${entry.id}`}>
      <View style={styles.entry}>
        <View style={styles.entryInfo}>
          <Text style={styles.entryTime}>{entry.time}</Text>
          <Text>Entry {entry.id}</Text>
        </View>
        <View>
          <Image source={entry.image} style={[styles.entryImage, { backgroundColor: colorScheme == "dark" ? '#333533' : '#90e0ef' }]} />
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
    width: '90%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    padding: 5,
    borderRadius: 12,
    backgroundColor: '#333533',
  },
  entryImage: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
  },
  entryInfo: {
    backgroundColor: '#333533',
    padding: 5,
  }
});
