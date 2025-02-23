import { Stack, Link } from "expo-router"
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import { View } from "@/components/Themed";


export default function MenuStack() {
    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
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
                  ),
            }}    
        >
            <Stack.Screen name="index" options={{ title: 'Entry'}}/>
        </Stack>
    )
}