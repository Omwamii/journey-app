import { Image, StyleSheet, Platform, FlatList, ScrollView, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { View, Text } from '@/components/Themed';
import { NoEntries } from '@/components/NoEntries';
import { Link } from 'expo-router';

import EntryItem from '@/components/EntryItem';

import  data from '@/constants/data';

export default function HomeScreen() {
    
  return (
    <SafeAreaView >
      <ScrollView>

        {/* Stories */}
        <View style={styles.storiesContainer}>
          <Text style={styles.containerHeader}>Stories</Text>
          <View style={styles.stories}>
            <View style={styles.todayStories}>
              <Text style={{ fontWeight: 'bold' }}>Today</Text>
              <Text style={{ color: Colors.dark.text }}>February 10 2025</Text>
            </View>
            <View style={styles.todayThrowbacks}>
              <Text style={{ fontWeight: 'bold' }}>Throwbacks</Text>
              <Text>No throwbacks</Text>
            </View>
          </View>
        </View>

        {/* Entries */}
        <View style={styles.entriesContainer}>
          <Text style={styles.containerHeader}>Entries</Text>
          <View style={styles.entries}>
          <View><Text style={styles.entriesDate}>February 17 2025</Text></View>
            <FlatList 
              data={data}
              renderItem={({ item }) => (<EntryItem entry={item} />)}
              contentContainerStyle={{ gap:5, paddingLeft: 10 }}
              keyExtractor={(item) => item.id}
            />
          
          </View>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  containerHeader: {
    fontSize: 20,
    width: '100%',
  },
  storiesContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    padding: 10,
    marginBottom: 5,
  },
  entriesContainer: {
    width: '100%',
    padding: 10,
  },
  stories: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 5
  },
  entries: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    padding: 5,
    // borderWidth: 1,
    // borderColor: Colors.light.tint,
    // borderStyle: 'solid',
  },
  todayStories: {
    backgroundColor: '#c8b6ff',
    padding: 20,
  },
  todayThrowbacks: {
    backgroundColor: 'gray',
    padding: 20,
  },
  entriesDate: {
    fontSize: 15,
  },
});
