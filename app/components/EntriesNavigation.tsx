import { TouchableOpacity, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
// import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from '@/constants/Colors';

const EntriesNavigation = ({ onPrev, onNext }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrev} style={styles.button}>
        <FontAwesome
          name="arrow-left"
          size={25}
          color={Colors.light.tint}
          // style={{ marginRight: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext} style={styles.button}>
        <FontAwesome
            name="arrow-right"
            size={25}
            color={Colors.light.tint}
            // style={{ marginRight: 15 }}
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  button: {
    padding: 10,
  },
});

export default EntriesNavigation;