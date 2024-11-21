function solution(n) {
    var answer=[];
    var reverse = String(n).split("").reverse().map(data=>Number(data));
    for(let i=0;i<reverse.length;i++){
        answer.push(Number(reverse[i]));
    }
    return answer;
}