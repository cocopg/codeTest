function solution(n) {
    var three = n.toString(3);
    var reverse3 = three.split("").reverse().join("");
    
    var answer = parseInt(reverse3, 3);
    return answer;
}