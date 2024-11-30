function solution(arr) {
    if(arr.length===1){
        return [-1];
    }
    let minN=Math.min(...arr);
    return arr.filter(e => e !==minN);
}