function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let sum = numbers[i]+numbers[j];
            answer.push(sum);
        }
        answer = [...new Set(answer)].sort((a,b)=>a-b);
    }
    return answer;
}