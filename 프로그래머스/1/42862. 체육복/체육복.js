function solution(n, lost, reserve) {
    let loster = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let reserver = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    let answer = n - loster.length;
    
    for (let i = 0; i < loster.length; i++) {
        let lostNum = loster[i];
      
        for (let j = 0; j < reserver.length; j++) {
            let reserveNum = reserver[j];
            if (reserveNum === lostNum - 1 || reserveNum === lostNum + 1) {
              answer += 1;
              reserver[j] = -1; 
              break; 
            }
        }
      }
    return answer;
}