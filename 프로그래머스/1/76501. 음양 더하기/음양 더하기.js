function solution(absolutes, signs) {
    var plus = 0;
    var minus = 0;
    for(let i=0;i<absolutes.length;i++){
        if(signs[i] === true){
            plus += absolutes[i];
        }else{
            minus += absolutes[i]*(-1);
        }
    }
    return plus+minus;
}