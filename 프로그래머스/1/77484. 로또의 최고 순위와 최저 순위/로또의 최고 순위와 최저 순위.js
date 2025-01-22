function solution(lottos, win_nums) {
    var answer = [];
    let high = 0;
    let low = 0;
    var wins=[0,6,5,4,3,2,1];
    
    for(let i=0; i<lottos.length;i++){
        if(lottos[i] === 0){
                high++;
            console.log(high,low)
            }
        for(let j=0;j<win_nums.length;j++){
            if(lottos[i]===win_nums[j]){
                high++;
                low++;
                console.log(high,low)
            }
        }
    }
    if(wins.includes(high)&&wins.includes(low)){
        high=wins.indexOf(high);
        low=wins.indexOf(low);
        console.log(high,low);
    }
    if(wins.indexOf(high)===0){
        high=6;
        console.log(high)
    }
    if(wins.indexOf(low)===0){
        low=6;
        console.log(low)
    }
    answer.push(high);
    answer.push(low);
    return answer;
}