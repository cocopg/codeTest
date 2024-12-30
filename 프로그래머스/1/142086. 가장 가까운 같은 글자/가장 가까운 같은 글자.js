function solution(s) {
    var answer = [];
    var word = [];
    
    for(let i=0;i<s.length; i++){
        if(!word.includes(s[i])){
            answer.push(-1);
            word.push(s[i]);
            continue;
        }
        if(word.includes(s[i])){
            answer.push(word.length - word.lastIndexOf(s[i]));
            word.push(s[i]);
            continue;
        }
    }
    return answer;
}