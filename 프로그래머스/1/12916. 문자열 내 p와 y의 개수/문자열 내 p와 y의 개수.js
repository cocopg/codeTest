function solution(s){
    var answer = true;
    var pc=s.toLowerCase().split("p").length;
    var yc=s.toLowerCase().split("y").length;

    if(pc===yc){
        answer=true
    }else{
        answer=false;
    }

    return answer;
}