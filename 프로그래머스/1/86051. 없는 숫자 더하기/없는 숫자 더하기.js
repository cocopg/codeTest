function solution(numbers) {
    var answer = 0;
    for(let i =0;i<10;i++){
        if(numbers.indexOf(i)===-1){
            answer+=i
        }
    }
    return answer;
}

/*Reduce함수 사용
function solution(numbers) {
    return Array(10).fill(0).map((_, i) => i) // 0부터 9까지 배열 생성
    .reduce((acc, num) => acc + (numbers.includes(num) ? 0 : num), 0);
}
*/