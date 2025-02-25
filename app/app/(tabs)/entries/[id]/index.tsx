import { Image, Pressable, StyleSheet } from 'react-native'
import { View, Text } from '@/components/Themed'
import React from 'react'
import { useLocalSearchParams, Stack, useRouter, Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '@/constants/data'
import EntriesNavigation from '@/components/EntriesNavigation';
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'


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

    const headerRight =  () => (
            <View style={{ flexDirection: 'row' }}>
                <Link href={`/entries/${id}/edit`} asChild>
                <Pressable>
                    {({ pressed }) => (
                    <FontAwesome
                        name="edit"
                        size={25}
                        color={Colors.light.tint}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                    )}
                </Pressable>
                </Link>

            <Link href=".." asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="star-o"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
            </View>
        )

  return (
    <View>
        <Stack.Screen
            options={{ 
                title: `Entry ${id}`
                , headerRight, 
            }}
        />

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