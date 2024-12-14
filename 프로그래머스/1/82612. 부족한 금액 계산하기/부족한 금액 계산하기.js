function solution(price, money, count) {
    const total = (count * (count + 1) / 2) * price;
    
    return total > money ? total - money : 0;
    
}