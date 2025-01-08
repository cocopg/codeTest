function solution(n, arr1, arr2) {
    var answer = arr1.map((e,i)=>{
        var arr3 = (e|arr2[i]).toString(2).padStart(n,0);
        return arr3.replaceAll(0," ").replaceAll(1,"#")
    });
    return answer;
}