function solution(t, p) {
    var answer = 0;
    for(let i=0;i<t.length-p.length+1;i++){
        let word=t.slice(i,i+p.length)
        if(Number(word)<=Number(p)){
            answer++;
        }
    }
    return answer;
}