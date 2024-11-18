function solution(n) {
    var answer = 0;
    for(let i=1;i<=n;i++){
    if(i*7>=n){
     answer=i;
        break;
    }
    }
    return answer;
}