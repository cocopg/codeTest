function solution(s) {
    var answer = [0,0];
    while(s !== "1"){
        answer[0]++;
        let word = s.split("0").join("")
        answer[1]+= s.length-word.length;
        s = word.length.toString(2);
    }
    return answer;
}