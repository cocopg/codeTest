function solution(babbling) {
    var answer = 0;
    
    for(let i=0; i<babbling.length;i++){
        babbling[i] = babbling[i].replace(/(aya|ye|woo|ma)/gi,"")
        if(babbling[i].trim()===""){
            answer++;
        }
    }
    
    return answer;
}