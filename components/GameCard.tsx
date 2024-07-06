import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  onPress: (id: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default GameCard;
