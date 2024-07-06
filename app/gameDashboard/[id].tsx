import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Pedometer } from "expo-sensors";

export default function GameDashboard() {
  const { id } = useLocalSearchParams();
  const [stepCount, setStepCount] = useState(0);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");

  useEffect(() => {
    let subscription: Pedometer.Subscription | null = null;

    const subscribe = async () => {
      try {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));

        if (isAvailable) {
          const { status } = await Pedometer.requestPermissionsAsync();
          if (status === "granted") {
            subscription = Pedometer.watchStepCount((result) => {
              setStepCount((prevCount) => prevCount + result.steps);
            });
          } else {
            Alert.alert(
              "Permission Denied",
              "Pedometer permission is required to count steps."
            );
          }
        } else {
          Alert.alert(
            "Not Available",
            "Pedometer is not available on this device."
          );
        }
      } catch (error: any) {
        Alert.alert("Error", "Failed to set up pedometer: " + error.message);
      }
    };

    subscribe();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Dashboard: Game {id}</Text>
      <View style={styles.pedometerContainer}>
        <Text style={styles.pedometerTitle}>Step Count</Text>
        <Text style={styles.stepCount}>{stepCount}</Text>
      </View>
      <Text style={styles.availability}>
        Pedometer available: {isPedometerAvailable}
      </Text>
      <Text style={styles.info}>
        Walk around with your device to see the step count increase.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pedometerContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  pedometerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  stepCount: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#007AFF",
  },
  availability: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
});
