import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="gameFeed" options={{ title: "Game Feed" }} />
      <Stack.Screen
        name="gameDetails/[id]"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="gameDashboard/[id]"
        options={{
          title: "Game Dashboard",
        }}
      />
    </Stack>
  );
}
