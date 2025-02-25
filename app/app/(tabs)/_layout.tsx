import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
         <Tabs.Screen 
            name="entries/index" 
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
            }}
          />

        <Tabs.Screen 
            name="calendar"
            options={{
              title: 'Calendar',
              tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />
            }}
          />

        <Tabs.Screen 
            name="media"
            options={{
              title: 'Media',
              tabBarIcon: ({ color }) => <TabBarIcon name="image" color={color} />
            }}
          />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />


        <Tabs.Screen
          name="entries/[id]/index"
          options={{
            href: null,
          }}
        />


        <Tabs.Screen
          name="entries/[id]/edit/"
          options={{
            href: null,
          }}
        />

        <Tabs.Screen
          name="entries/date/[date]"
          options={{
            href: null,
          }}
        />

        <Tabs.Screen 
          name='index'
          options={{
            href: null,
          }}
        />


    </Tabs>
    </>
  );
}
