import { Tabs } from "expo-router"
import { View } from "react-native"

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

export default function RootLayout() {
  function iconContainerStyle(focused: boolean): object {
    return {
      backgroundColor: focused && "orange",
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 10,
      width: 43,
      height: 35,
      marginTop: 10,
      alignItems: "center",
    }
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle(focused)}>
              <MaterialCommunityIcons
                name='dots-square'
                size={24}
                color={focused ? "orange" : "gray"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
