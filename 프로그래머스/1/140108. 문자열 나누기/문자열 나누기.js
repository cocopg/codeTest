function solution(s) {
    var answer = 0;
    var first=s[0];
    var firstC=0;
    var otherC=0;
    for(let i=0; i<s.length;i++){
        if(first===s[i]){
            firstC++;
        }else{
            otherC++;
        }
        
        if(firstC===otherC){
            answer++;
            firstC=0;
            otherC=0;
            first=s[i+1];
        }
    }
    if(firstC!==0 || otherC!==0){
        answer++;
    }
    return answer;
}