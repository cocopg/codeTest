function solution(n) {
    var answer = 0;
    const array = new Array(n+1).fill(true); 
    const num = Math.sqrt(n) 

    for(let i = 2; i <= num; ++i){
        if(array[i] === false){
            continue; 
        }
        for(let k = i * i; k <= n; k += i){
             array[k] = false;
        }
    }
    for(let i = 2; i <= n; ++i){
        if(array[i] === true){
            answer++;
        }
    }
    return answer;
}