import { Stack } from "expo-router"


export default function EntriesStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    )
}