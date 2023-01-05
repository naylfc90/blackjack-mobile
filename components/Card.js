import { StyleSheet, View, Image } from "react-native";
import React from "react";

import { getCardImage } from "../helper/CardHelper";

const Card = ({ card }) => {
  const cardImage = getCardImage(card);

  return (
    <View style={styles.container}>
      <Image source={cardImage} style={styles.card} key={cardImage} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    paddingTop: 5,
    padding: 4,
  },
  card: {
    height: 109,
    width: 75,
  },
});
