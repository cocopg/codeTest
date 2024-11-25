function solution(seoul) {
    var stat=0
    var answer = '';
    for(let i=0;i<seoul.length;i++){
        if(seoul[i]==="Kim"){
            stat+=i;
        }
    }
    
    return "김서방은 "+stat+"에 있다";
}