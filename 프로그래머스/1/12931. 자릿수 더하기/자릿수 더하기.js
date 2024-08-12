function solution(n)
{
    var answer = 0;

    var a = String(n);
    
    for(let i=0; i<a.length; i++){
        answer+=Number(a[i]);
    }

    return answer;
}