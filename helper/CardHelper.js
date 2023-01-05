export const PlayingCards = {
  images: [
    {
      name: "2-Club",
      cardImage: require("../assets/playing-cards/2-Club.png"),
    },
    {
      name: "3-Club",
      cardImage: require("../assets/playing-cards/3-Club.png"),
    },
    {
      name: "4-Club",
      cardImage: require("../assets/playing-cards/4-Club.png"),
    },
    {
      name: "5-Club",
      cardImage: require("../assets/playing-cards/5-Club.png"),
    },
    {
      name: "6-Club",
      cardImage: require("../assets/playing-cards/6-Club.png"),
    },
    {
      name: "7-Club",
      cardImage: require("../assets/playing-cards/7-Club.png"),
    },
    {
      name: "8-Club",
      cardImage: require("../assets/playing-cards/8-Club.png"),
    },
    {
      name: "9-Club",
      cardImage: require("../assets/playing-cards/9-Club.png"),
    },
    {
      name: "10-Club",
      cardImage: require("../assets/playing-cards/10-Club.png"),
    },
    {
      name: "J-Club",
      cardImage: require("../assets/playing-cards/J-Club.png"),
    },
    {
      name: "Q-Club",
      cardImage: require("../assets/playing-cards/Q-Club.png"),
    },
    {
      name: "K-Club",
      cardImage: require("../assets/playing-cards/K-Club.png"),
    },
    {
      name: "A-Club",
      cardImage: require("../assets/playing-cards/A-Club.png"),
    },
    {
      name: "2-Diamond",
      cardImage: require("../assets/playing-cards/2-Diamond.png"),
    },
    {
      name: "3-Diamond",
      cardImage: require("../assets/playing-cards/3-Diamond.png"),
    },
    {
      name: "4-Diamond",
      cardImage: require("../assets/playing-cards/4-Diamond.png"),
    },
    {
      name: "5-Diamond",
      cardImage: require("../assets/playing-cards/5-Diamond.png"),
    },
    {
      name: "6-Diamond",
      cardImage: require("../assets/playing-cards/6-Diamond.png"),
    },
    {
      name: "7-Diamond",
      cardImage: require("../assets/playing-cards/7-Diamond.png"),
    },
    {
      name: "8-Diamond",
      cardImage: require("../assets/playing-cards/8-Diamond.png"),
    },
    {
      name: "9-Diamond",
      cardImage: require("../assets/playing-cards/9-Diamond.png"),
    },
    {
      name: "10-Diamond",
      cardImage: require("../assets/playing-cards/10-Diamond.png"),
    },
    {
      name: "J-Diamond",
      cardImage: require("../assets/playing-cards/J-Diamond.png"),
    },
    {
      name: "Q-Diamond",
      cardImage: require("../assets/playing-cards/Q-Diamond.png"),
    },
    {
      name: "K-Diamond",
      cardImage: require("../assets/playing-cards/K-Diamond.png"),
    },
    {
      name: "A-Diamond",
      cardImage: require("../assets/playing-cards/A-Diamond.png"),
    },
    {
      name: "2-Heart",
      cardImage: require("../assets/playing-cards/2-Heart.png"),
    },
    {
      name: "3-Heart",
      cardImage: require("../assets/playing-cards/3-Heart.png"),
    },
    {
      name: "4-Heart",
      cardImage: require("../assets/playing-cards/4-Heart.png"),
    },
    {
      name: "5-Heart",
      cardImage: require("../assets/playing-cards/5-Heart.png"),
    },
    {
      name: "6-Heart",
      cardImage: require("../assets/playing-cards/6-Heart.png"),
    },
    {
      name: "7-Heart",
      cardImage: require("../assets/playing-cards/7-Heart.png"),
    },
    {
      name: "8-Heart",
      cardImage: require("../assets/playing-cards/8-Heart.png"),
    },
    {
      name: "9-Heart",
      cardImage: require("../assets/playing-cards/9-Heart.png"),
    },
    {
      name: "10-Heart",
      cardImage: require("../assets/playing-cards/10-Heart.png"),
    },
    {
      name: "J-Heart",
      cardImage: require("../assets/playing-cards/J-Heart.png"),
    },
    {
      name: "Q-Heart",
      cardImage: require("../assets/playing-cards/Q-Heart.png"),
    },
    {
      name: "K-Heart",
      cardImage: require("../assets/playing-cards/K-Heart.png"),
    },
    {
      name: "A-Heart",
      cardImage: require("../assets/playing-cards/A-Heart.png"),
    },
    {
      name: "2-Spade",
      cardImage: require("../assets/playing-cards/2-Spade.png"),
    },
    {
      name: "3-Spade",
      cardImage: require("../assets/playing-cards/3-Spade.png"),
    },
    {
      name: "4-Spade",
      cardImage: require("../assets/playing-cards/4-Spade.png"),
    },
    {
      name: "5-Spade",
      cardImage: require("../assets/playing-cards/5-Spade.png"),
    },
    {
      name: "6-Spade",
      cardImage: require("../assets/playing-cards/6-Spade.png"),
    },
    {
      name: "7-Spade",
      cardImage: require("../assets/playing-cards/7-Spade.png"),
    },
    {
      name: "8-Spade",
      cardImage: require("../assets/playing-cards/8-Spade.png"),
    },
    {
      name: "9-Spade",
      cardImage: require("../assets/playing-cards/2-Spade.png"),
    },
    {
      name: "10-Spade",
      cardImage: require("../assets/playing-cards/10-Spade.png"),
    },
    {
      name: "J-Spade",
      cardImage: require("../assets/playing-cards/J-Spade.png"),
    },
    {
      name: "Q-Spade",
      cardImage: require("../assets/playing-cards/Q-Spade.png"),
    },
    {
      name: "K-Spade",
      cardImage: require("../assets/playing-cards/K-Spade.png"),
    },
    {
      name: "A-Spade",
      cardImage: require("../assets/playing-cards/A-Spade.png"),
    },
    {
      name: "Hidden",
      cardImage: require("../assets/playing-cards/back.png"),
    },
  ],
};

export const getCardImage = (name) => {
  const found = PlayingCards.images.find((card) => card.name === name);
  return found ? found.cardImage : null;
};
