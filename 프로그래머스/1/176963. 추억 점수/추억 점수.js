function solution(name, yearning, photo) {
    var answer = [];
    for(let i =0;i<photo.length;i++){
        var sum=0;
        for(let j=0;j<photo[i].length;j++){
            for(let k=0; k<name.length;k++){
                if(name[k]===photo[i][j]){
                    sum+=yearning[k]
                }
            }
        }
        answer.push(sum);
    }
    return answer;
}