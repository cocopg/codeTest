function solution(N, stages) {
    var answer = [];
    var clg=stages.length;
    
    for(let i=1; i<=N; i++){
        let succ = stages.filter(s=>s===i).length;
        answer.push([i,succ/clg]);
        clg = clg - succ;
    }
    answer.sort((a,b)=>b[1]-a[1]);
    
    return answer.map(n=>n[0]);
}