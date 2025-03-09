import { usePushNotifications } from "@/hooks/usePushNotifications"
import { Text, View } from "react-native"

export default function Index() {
  const { expoPushToken, notification } = usePushNotifications()

  if (expoPushToken) {
    console.log(expoPushToken)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Delivery man APP!</Text>
      <Text>Notifications Token:: {expoPushToken?.data ?? ""}</Text>
    </View>
  )
}
