import { Image, StyleSheet, Platform, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { View, Text } from '@/components/Themed';
import { NoEntries } from '@/components/NoEntries';
import { Link } from 'expo-router';

import HillImage from '../../assets/images/hill_top.png';

import EntryItem from '@/components/EntryItem';

import  data from '@/constants/data';

export default function HomeScreen() {

  return (
    <SafeAreaView>
      {/* <ScrollView> */}

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
              contentContainerStyle={{ gap: 10 }}
              // ListHeaderComponent={() => <OrderListItem order={order} />}
            />
          </View>
        </View>
      {/* </ScrollView> */}
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
      // borderWidth: 1,
      // borderStyle: 'solid',
      // borderColor: 'green',
    width: '100%',
  },
  storiesContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'green',
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
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
    padding: 5
  },
  todayStories: {
    backgroundColor: '#c8b6ff',
    // borderColor: 'gainsboro',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderRadius: 5,
    padding: 20,
  },
  todayThrowbacks: {
    backgroundColor: 'gray',
    // borderColor: 'gainsboro',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderRadius: 5,
    padding: 20,
  },
  entriesDate: {
    fontSize: 15,
  },
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
