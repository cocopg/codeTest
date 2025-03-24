function solution(s) {
    var answer = '';
    var result = s.split(" ");
    answer = result.map(x=>x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(" ");
    return answer;
}