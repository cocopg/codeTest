function solution(nums) {
    var answer = 0;
    var arr = [...new Set(nums)];
    var count=nums.length/2;
    if(arr.length >= count){
        answer = count;
    }else{
        answer = arr.length;
    }
    return answer;
}