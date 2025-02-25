import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "@/components/Themed";
import React from "react";
import { useLocalSearchParams, Stack, useRouter, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "@/constants/data";
import EntriesNavigation from "@/components/EntriesNavigation";
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

const EntryDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [text, setText] = useState("");

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const currentIndex = data.findIndex((entry) => entry.id === id);
  const entry = data[currentIndex];

  if (!entry) {
    return <Text>Entry not found</Text>;
  }

  const headerRight = () => (
    <View style={{ flexDirection: "row" }}>
      <Link href=".." asChild>
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
  );

  return (
    <View>
        
      <Stack.Screen
        options={{
          title: `Edit Entry ${id}`,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("Save entry");
              }}
            >
              <FontAwesome
                name="check"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("Delete entry");
              }}
            >
              <FontAwesome
                name="trash"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Image source={entry.image} style={styles.imageStyles} />
      {/* <Text style={styles.entryText}>{entry.text}</Text> */}
      <TextInput onChangeText={handleTextChange} value={entry.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%",
    resizeMode: "cover",
    marginTop: 0,
  },
  entryDate: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    borderBottomColor: "grainsboro",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  entryText: {
    fontSize: 16,
    padding: 10,
  },
});

export default EntryDetailsScreen;
