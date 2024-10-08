function solution(score) {
    let answer = new Array(score.length).fill(1)
    
    // 2. score 배열의 각 평균 점수를 계산한 배열 avg를 선언한다.
    const avg = score.map(e => (e[0]+e[1])/2); 

   // 3. 이중 for문을 사용, i번째 값보다 큰 j값이 있다면 i의 값에 1을 더한다.
    for(let i = 0; i < avg.length; i++){
        for(let j = 0; j <avg.length; j++){
            if(avg[i]<avg[j]) answer[i]++;
        }
    }
    
    return answer;
}