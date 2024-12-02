function solution(a, b) {
    return a.reduce((sum, aNum, idx)=>sum + aNum*b[idx],0);
}