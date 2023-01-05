import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Card from "../components/Card";

const GameScreen = () => {
  let dealer = 0;
  let player = 0;

  let dealersAceCount = 0;
  let playersAceCount = 0;

  let hiddenCard = 0;
  let dealersHand = [];
  let playersHand = [];

  const [deck, setDeck] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState();
  const [dealersCount, setDealersCount] = useState(0);
  const [playersCount, setPlayersCount] = useState(0);
  const [dealersCards, setDealersCards] = useState([]);
  const [playersCards, setPlayersCards] = useState([]);
  const [playerCanHit, setPlayerCanHit] = useState(true);
  const [gameOutcome, setGameOutcome] = useState("");

  const [aceCount, setAceCount] = useState(0);
  const [playerAceAlternative, setPlayerAceAlternative] = useState(0);

  const buildDeck = () => {
    setDealersCards([]);
    setPlayersCards([]);
    setGameStarted(true);
    setGameFinished();
    setPlayerCanHit(true);
    setAceCount(0);
    setPlayerAceAlternative(0);

    dealer = 0;
    player = 0;

    dealersAceCount = 0;
    playersAceCount = 0;

    let values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    let suits = ["Club", "Diamond", "Heart", "Spade"];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        deck.push(values[j] + "-" + suits[i]);
      }
    }
    shuffleDeck();
  };

  const shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++) {
      let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    setDeck(deck);
    setPlayersCount(0);
    setPlayerCanHit(true);
    startGame();
  };

  const startGame = () => {
    hiddenCard = deck.pop();
    // console.log(`Dealer's hidden card: ${hiddenCard}`);
    dealer += getValue(hiddenCard);
    dealersAceCount += checkForAce(hiddenCard);
    dealersHand.push(hiddenCard);
    setDealersCards(dealersHand);

    while (dealer < 17) {
      let card = deck.pop();
      dealersHand.push(card);
      dealer += getValue(card);
      dealersAceCount += checkForAce(card);
      setDealersCount(dealer);
      setDealersCards(dealersHand);
    }

    for (let i = 0; i < 2; i++) {
      let card = deck.pop();
      playersHand.push(card);
      player += getValue(card);
      playersAceCount += checkForAce(card);
      setPlayersCount(player);
      setPlayersCards(playersHand);
      setAceCount(playersAceCount);
    }

    if (aceCount > 0) {
      handleAce(player, aceCount);
    }

    setGameStarted(true);
  };

  const getValue = (card) => {
    let data = card.split("-"); // Removes "-"" from the card name
    let value = data[0];

    if (isNaN(value)) {
      // Jack, Queen, King, Ace
      if ((value == "A" && player <= 10) || (value == "A" && dealer <= 10)) {
        return 11;
      } else if (
        (value == "A" && player > 10) ||
        (value == "A" && dealer > 10)
      ) {
        return 1;
      }

      return 10;
    }
    return parseInt(value);
  };

  const checkForAce = (card) => {
    if (card[0] == "A") {
      return 1;
    }
    return 0;
  };

  const hit = () => {
    let card = deck.pop();
    player = playersCount;
    player += getValue(card);
    playersAceCount += checkForAce(card);
    player = handleAce(player, aceCount);

    if (handleAce(player, aceCount) > 21) {
      setPlayerCanHit(false);
      setGameFinished(true);
      setGameStarted(false);
      setGameOutcome("BUST! You Lose!");
    }

    if (!playerCanHit) {
      setGameFinished(true);
      setGameStarted(false);
      return;
    }

    setPlayersCards((prev) => {
      return [...prev, card];
    });

    setPlayersCount(player);
  };

  const stand = () => {
    dealer = handleAce(dealersCount, dealersAceCount);
    player = handleAce(playersCount, playersAceCount);

    setPlayersCount(player);
    setDealersCount(dealer);

    if (playersCount > 21 || playerAceAlternative > 21) {
      setGameOutcome("You Lose!");
    } else if (dealersCount > 21) {
      setGameOutcome("You Win!");
    } else if (
      playersCount == dealersCount ||
      playerAceAlternative == dealersCount
    ) {
      setGameOutcome("It's a Draw!");
    } else if (
      playersCount > dealersCount ||
      playerAceAlternative > dealersCount
    ) {
      setGameOutcome("You Win!");
    } else if (
      playersCount < dealersCount ||
      playerAceAlternative < dealersCount
    ) {
      setGameOutcome("You Lose!");
    }

    setGameStarted(false);
    setGameFinished(true);
  };

  const handleAce = (player, aceCount) => {
    while (aceCount > 0 && player > 21) {
      if (playerAceAlternative > 21) return;
      console.log("called");
      setPlayerAceAlternative((player -= 10));
      aceCount -= 1;
    }
    return player;
  };

  return (
    <SafeAreaView style={styles.container}>
      {gameFinished && (
        <View
          style={{
            paddingBottom: 20,
            marginTop: -20,
          }}
        >
          <View
            style={{
              backgroundColor: "#565658",
              padding: 10,
              borderRadius: 25,
            }}
          >
            <Text style={{ fontSize: 18, color: "#F3F3F4", fontWeight: "600" }}>
              {gameOutcome}
            </Text>
          </View>
        </View>
      )}

      {gameStarted && !gameFinished && (
        <>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", paddingBottom: 20 }}>
              Dealer: {getValue(dealersCards[1])}
            </Text>
            {/* {console.log(`Dealer's card: ${dealersCards[1]}`)} */}
            {
              <View style={{ flexDirection: "row" }}>
                <Card card="Hidden" />
                <Card card={dealersCards[1]} />
              </View>
            }
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                paddingBottom: 20,
              }}
            >
              You: {playersCount}
              {/* {playerAceAlternative > 0
                ? playersCount < 21
                  ? playerAceAlternative + "/" + playersCount
                  : playersCount
                : playersCount > 21
                ? playerAceAlternative
                : playersCount} */}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {playersCards.map((card) => (
                <Card card={card} key={card} />
              ))}
            </View>
          </View>

          {!gameFinished && (
            <View style={styles.controlsContainer}>
              <TouchableOpacity onPress={hit} disabled={playersCount > 21}>
                <View
                  style={[
                    styles.hitButton,
                    {
                      backgroundColor: playersCount <= 21 ? "green" : "gray",
                    },
                  ]}
                >
                  <Text style={styles.playButtonText}>Hit</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={stand}>
                <View style={styles.standButton}>
                  <Text style={styles.playButtonText}>Stand</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}

      {gameFinished && (
        <>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                paddingBottom: 20,
              }}
            >
              Dealer: {dealersCount}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {dealersCards.map((card) => (
                <Card card={card} key={card} />
              ))}
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", paddingBottom: 20 }}>
              You: {playersCount}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {playersCards.map((card) => (
                <Card card={card} key={card} />
              ))}
            </View>
          </View>
        </>
      )}

      {!gameStarted && (
        <TouchableOpacity onPress={buildDeck}>
          <View style={styles.playButton}>
            <Text style={styles.playButtonText}>New Game</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F4",
    alignItems: "center",
    justifyContent: "center",
  },
  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  controlsContainer: {
    flexDirection: "row",
    alignContent: "center",
    paddingTop: 10,
  },
  hitButton: {
    marginRight: 10,
    padding: 15,
    borderRadius: 25,
  },
  standButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 25,
  },
  playButton: {
    marginTop: 15,
    padding: 20,
    backgroundColor: "green",
    borderRadius: 35,
  },
  playButtonText: {
    color: "white",
    fontSize: 18,
  },
});
