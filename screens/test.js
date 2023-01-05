const hit = () => {
  let alternative;
  let card = deck.pop();

  if (playerAceAlternative > 0) {
    alternative = playerAceAlternative;
    alternative += getValue(card);
    setPlayerAceAlternative(alternative);

    player = playersCount;
    player += getValue(card);
    playersAceCount += checkForAce(card);
    if (player <= 21) setPlayersCount(player);
  }

  player = playersCount;
  player += getValue(card);
  playersAceCount += checkForAce(card);
  // player = handleAce(player, playersAceCount);

  if (playerAceAlternative > 0) {
    if (handleAce(alternative, playersAceCount) > 21) {
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
    setPlayersCount(alternative);
  } else {
    if (handleAce(player, playersAceCount) > 21) {
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
  }
};
