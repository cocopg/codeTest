function solution(answers) {
    var answer = [];
    var p1 = [1,2,3,4,5];
    var p2 = [2,1,2,3,2,4,2,5];
    var p3 = [3,3,1,1,2,2,4,4,5,5];
    var result = [0,0,0];
    
    for(let i=0; i<answers.length; i++){
        if(p1[i%5]===answers[i]) result[0]++;
        if(p2[i%8]===answers[i]) result[1]++;
        if(p3[i%10]===answers[i]) result[2]++
    }
    var maxValue = Math.max(...result);
    var index = 0;
    for(let i = 0; i<3;i++){
        if(maxValue === result[i]){
            answer[index]=i+1
            index++;
        }
    }
    return answer;
}