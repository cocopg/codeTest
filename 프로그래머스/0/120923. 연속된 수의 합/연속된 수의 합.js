function solution(num, total) {
    const start=((total*2/num-(num-1))/2);
    var answer = [];
    for(let i=0; i<num; i++){
        answer.push(start+i);
    }
    return answer;
}