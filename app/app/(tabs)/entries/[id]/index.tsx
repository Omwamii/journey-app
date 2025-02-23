import { Image, StyleSheet } from 'react-native'
import { View, Text } from '@/components/Themed'
import React from 'react'
import { useLocalSearchParams, Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '@/constants/data'
import EntriesNavigation from '@/components/EntriesNavigation';


const EntryDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const currentIndex = data.findIndex(entry => entry.id === id);
  const entry = data[currentIndex];

    if (!entry) {
        return <Text>Entry not found</Text>
    }

    const gotoNextEntry = () => {
        if (currentIndex < data.length - 1) {
            const nextEntry = data[currentIndex + 1];
            router.push(`/entries/${nextEntry.id}`);
          }
    }

    const gotoPrevEntry = () => {
        if (currentIndex > 0) {
            const prevEntry = data[currentIndex - 1];
            router.push(`/entries/${prevEntry.id}`);
          }
    }

  return (
    <View>
        <Stack.Screen options={{ title: `Entry ${id}`}}/>
        <Image source={entry.image} style={styles.imageStyles} />
        <Text style={styles.entryText}>{entry.text}</Text>

        {/* Navigate to next & prev entries */}
        <EntriesNavigation onPrev={gotoPrevEntry} onNext={gotoNextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyles: {
        width: '100%',
        resizeMode: 'cover',
        marginTop: 0,
    },
    entryDate: {
        fontSize: 20,
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