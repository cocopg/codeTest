function solution(x) {
    var num = String(x).split("");
    var add = 0;
    for(let i=0;i<num.length;i++){
        add += Number(num[i]);
    }
    var answer = x % add===0;
    
    return answer;
}