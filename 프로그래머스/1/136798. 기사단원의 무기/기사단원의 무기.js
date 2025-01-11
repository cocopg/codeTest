function solution(number, limit, power) {
    var answer = 0;
    var countarr = [];
    for(let i=1; i<=number; i++){
        let count = 0;
        for(let j=1;j<=Math.sqrt(i);j++){
            if(i%j===0){
                count++;
                if(i/j!==j){
                    count++;
                }
            }
        }
        countarr.push(count);
    }
    for(let k=0; k<countarr.length;k++){
        answer+=countarr[k]>limit?power:countarr[k]
    }
    return answer;
}