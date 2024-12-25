function solution(d, budget) {
    var answer = 0;
    var count = 0;
    d.sort((a,b)=>(a-b));
    for (let i = 0; i < d.length; i++) {
        count += d[i];
        
        if (budget < count) {
            break;
        }
        answer++;
    }
    return answer;
}