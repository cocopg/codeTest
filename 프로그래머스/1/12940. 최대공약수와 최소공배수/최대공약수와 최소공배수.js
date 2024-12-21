function solution(n, m) {
    var answer=[];
    let gcd = (a, b) => b ? gcd(b, a % b) : a;
    
    let g = gcd(n, m);
    let l = (n * m) / g;
    answer.push(g,l);
    return answer;
}