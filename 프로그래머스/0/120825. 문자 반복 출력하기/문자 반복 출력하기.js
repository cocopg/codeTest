function solution(my_string, n) {
    var answer = [...my_string].map(v=>v.repeat(n)).join("");
    return answer;
}