function solution(array) {
    var answer = 0;
    array=array.sort((a,b)=>a-b);
    var middle = Math.floor(array.length/2)
    answer=array[middle]
    return answer;
}