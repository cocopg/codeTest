function solution(ingredient) {
    var answer = 0;
    const burger = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        burger.push(ingredient[i]);
        
        if (burger.length >= 4) {
            const burgerI = burger.slice(-4).join("");
            
            if (burgerI === '1231') {
                burger.splice(-4);
                answer += 1;
            }
        }
    }
    
    return answer;
}