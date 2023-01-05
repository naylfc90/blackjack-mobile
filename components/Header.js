import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>Blackjack</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.05,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#565658",
  },
  headerText: {
    marginTop: -10,
    color: "#F3F3F4",
    fontSize: 20,
    fontWeight: "700",
  },
});
