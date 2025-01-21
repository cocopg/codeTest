function solution(n, m, section) {
    var answer = 0;
    var paint=0;
    
    section.forEach((n)=>{
        if(n>paint){
            paint=n+m-1;
            
            answer++;
        }
    });
    return answer;
}