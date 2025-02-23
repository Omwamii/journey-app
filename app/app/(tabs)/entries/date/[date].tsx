import { View, Text } from '@/components/Themed'
import { Stack, useLocalSearchParams } from 'expo-router';
import data from '@/constants/data';
import EntryItem from '@/components/EntryItem';
import { FlatList } from 'react-native';

const DateEntries = () => {
    const { date } = useLocalSearchParams();
    const entries = data.filter(entry => entry.date === date);

  return (
    <View>
    <Stack.Screen options={{ title: `Entries for ${date}`}}/>
      <FlatList
        data={entries}
        renderItem={({ item }) => (<EntryItem entry={item} />)}
        contentContainerStyle={{ gap: 10 }}
        />
    </View>
  )
}

export default DateEntries;