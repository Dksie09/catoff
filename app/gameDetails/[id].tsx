import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function GameDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const game = {
    title: `Game ${id}`,
    description: `This is a detailed description for Game ${id}. It's an exciting game that you'll surely enjoy! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    imageUrl: `https://picsum.photos/seed/${id}/400/300`,
  };

  const handleJoin = () => {
    console.log(`Joined game ${id}`);

    router.back();
    router.push(`/gameDashboard/${id}`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: game.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.description}>{game.description}</Text>
        <TouchableOpacity style={styles.joinButton} onPress={handleJoin}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
  },
  joinButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
