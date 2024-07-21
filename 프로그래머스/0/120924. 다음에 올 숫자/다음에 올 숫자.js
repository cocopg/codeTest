function solution(common) {
    const com1=common[1]-common[0];
    const com2=common[2]-common[1];
    
    
    var answer = com1 === com2?common.at(-1)+com1:common.at(-1)*(common[1]/common[0]);
    return answer;
}