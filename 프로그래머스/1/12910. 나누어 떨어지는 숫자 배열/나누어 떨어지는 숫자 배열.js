function solution(arr, divisor) {
    var answer = [];
    var num = arr.sort((a,b)=>a-b);
    console.log(num)
    for(let i=0;i<num.length;i++){
        if(num[i]%divisor === 0){
            answer.push(num[i])
        }
        
      }
    if(answer.length===0){
        answer.push(-1);
    }
    console.log(answer)
    
    return answer;
}