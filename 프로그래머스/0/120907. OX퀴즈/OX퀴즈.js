function solution(quiz) {
    var answer = [];
    quiz.forEach((item)=>{
    const quiz0 = item.split(" ");
    
    const x=Number(quiz0[0]);
    const y=Number(quiz0[2]);
    
    let calc=0;
    
    if(quiz0[1] === "+"){
        calc = x+y;
    }
    if(quiz0[1] === "-"){
        calc = x-y;
    }
    
    const result = Number(quiz0[4]);
    
    if(calc === result){
        answer.push("O");
    }
    if(calc !== result){
       answer.push("X");
    }
    
    })
    return answer;
}