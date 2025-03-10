function solution(players, callings) {
    const player = {};
  
    for (let i = 0; i < players.length; i++) {
        player[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const idx = player[callings[i]];
        const temp = players[idx-1];
      
        players[idx-1] = callings[i];
        players[idx] = temp;
      
        player[callings[i]] = idx - 1;
        player[temp] = idx;
    }
    
    return players;
}