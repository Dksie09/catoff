import React, { useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import GameCard from "../components/GameCard";

// Dummy data
const DUMMY_GAMES = Array.from({ length: 50 }, (_, i) => ({
  id: `game-${i + 1}`,
  title: `Game ${i + 1}`,
  description: `This is a description for Game ${
    i + 1
  }. It's an exciting game that you'll surely enjoy!`,
  imageUrl: `https://picsum.photos/seed/${i + 1}/300/200`,
}));

const ITEMS_PER_PAGE = 10;

export default function GameFeed() {
  const [games, setGames] = useState(DUMMY_GAMES.slice(0, ITEMS_PER_PAGE));
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loadMoreGames = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newGames = DUMMY_GAMES.slice(
        games.length,
        games.length + ITEMS_PER_PAGE
      );
      setGames([...games, ...newGames]);
      setLoading(false);
    }, 1000); // Simulating network delay
  };

  const handleGamePress = (id: string) => {
    router.push(`/gameDetails/${id}`);
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCard
            id={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            onPress={handleGamePress}
          />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={loadMoreGames}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  loader: {
    marginVertical: 16,
    alignItems: "center",
  },
});
