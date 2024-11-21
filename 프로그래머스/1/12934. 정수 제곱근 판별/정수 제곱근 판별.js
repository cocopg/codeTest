function solution(n) {
    var root = Math.sqrt(n);
    console.log(root)
    var answer = 0;
    if(n%root === 0){
        root++;
        answer=Math.pow(root,2);
    }else{
        answer=-1
    }
    return answer;
}