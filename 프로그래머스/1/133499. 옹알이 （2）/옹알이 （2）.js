function solution(babbling) {
    var answer = 0;
    var talk = ["aya","ye","woo","ma"];
    
    for(let i=0; i<babbling.length;i++){
        let babble = babbling[i];
        
        for(let j=0;j<talk.length;j++){
            
            if(babble.includes(talk[j].repeat(2))){
               break;
               }
            
            babble = babble.split(talk[j]).join(" ");
            }
        
            if(babble.split(" ").join("").length === 0){
                answer++;
            }
        }
    
    return answer;
}