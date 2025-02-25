import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useRouter } from 'expo-router';
import data from '@/constants/data';

const markedDates = data.reduce((acc, entry) => {
  if (acc[entry.date]) {
    // If you want to show a dot and perhaps a count, you can customize it.
    acc[entry.date].dots.push({ key: entry.id, color: 'blue' });
  } else {
    acc[entry.date] = {
      marked: true,
      dotColor: 'blue',
      // Optionally, for multiple entries you could use a dots array:
      dots: [{ key: entry.id, color: 'blue' }],
    };
  }
  return acc;
}, {});

const CalendarScreen = () => {
  const router = useRouter();

  const handleDayPress = (day) => {
    // day.dateString will be in 'YYYY-MM-DD' format
    // Navigate to a new screen with entries for that day.
    router.push(`/entries/date/${day.dateString}`);
    // console.log('day', day);
  };

  console.log(markedDates)

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default CalendarScreen;
