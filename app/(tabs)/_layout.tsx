import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import the Ionicons library

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors"; // Import Colors
import { useColorScheme } from "@/hooks/useColorScheme"; // Import the custom hook

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Ensure colorScheme is defined before using it
  const scheme = colorScheme || "light"; // Default to 'light' if colorScheme is null or undefined

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[scheme].tint, // Active tab color
        tabBarInactiveTintColor: Colors[scheme].tabIconDefault, // Inactive tab color
        headerShown: false, // Hide the header
        headerTitleAlign: "center", // Center the header title
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute", // iOS transparent background for blur effect
          },
          default: {},
        }),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} /> // Home icon
          ),
        }}
      />

      {/* Contact Tab */}
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact Us",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={28} color={color} /> // Contact icon
          ),
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="paper-plane" size={28} color={color} /> // Explore icon
          ),
        }}
      />

      {/* Messages Tab */}
      <Tabs.Screen
        name="message"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail" size={28} color={color} /> // Envelope icon
          ),
        }}
      />
    </Tabs>
  );
}
