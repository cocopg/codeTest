function solution(s) {
    var answer = 0;
    num = [[0,"zero"],[1,"one"],[2,"two"],[3,"three"],[4,"four"],
          [5,"five"],[6,"six"],[7,"seven"],[8,"eight"],[9,"nine"]]
    
    for(let i=0; i<num.length;i++){
        if(s.includes(num[i][1])){
            s = s.replaceAll(num[i][1], num[i][0]);
        }
        
            answer=parseInt(s);
    }
    
    return answer;
}