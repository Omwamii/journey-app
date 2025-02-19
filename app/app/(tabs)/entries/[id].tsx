import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const EntryDetailsScreen = ({ entry }) => {
  return (
    <View>
        <Image source={entry.image} style={styles.imageStyles} />
        <Text style={styles.entryDate}>{entry.date}</Text>
        <Text style={styles.entryText}>{entry.text}</Text>

        {/* Navigate to next & prev entries */}
        <View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyles: {
        width: '100%',
        height: 400,
        borderRadius: 50
    },
    entryDate: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        borderBottomColor: 'grainsboro',
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    entryText: {
        fontSize: 16,
        padding: 10
    }
})

export default EntryDetailsScreen