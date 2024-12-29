function solution(sizes) {
    var answer = 0;
    var width = 0;
    var height = 0;
    
    for(let i = 0; i<sizes.length;i++){
        var max = Math.max(sizes[i][0],sizes[i][1]);
        var min = Math.min(sizes[i][0],sizes[i][1]);
        
        width = Math.max(width, max);
        height = Math.max(height, min);
        
        answer=height*width;
    }
    return answer;
}