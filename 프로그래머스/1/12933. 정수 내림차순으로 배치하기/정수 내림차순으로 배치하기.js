function solution(n) {
    var arr=String(n).split("").sort((a,b)=>b-a);
    var answer = Number(arr.join(""));
    return answer;
}