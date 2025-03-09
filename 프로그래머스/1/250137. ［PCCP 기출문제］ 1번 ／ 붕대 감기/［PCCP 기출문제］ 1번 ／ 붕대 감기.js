function solution(bandage, health, attacks) {
    const maxHealth = health;
    const [t, x, y] = bandage;
    let lastAttackTime = 0; //마지막 공격시간
    
    for (const [attackTime, damage] of attacks) {
        const timeDiff = attackTime - lastAttackTime - 1; //이전 공격과 현재 공격시간 차이
        const heal = timeDiff * x + Math.floor(timeDiff / t) * y; //공격시간 간 차이가 시전시간보다 길면 연속성공
        health = Math.min(health + heal, maxHealth); //회복량 계산 후 체력 업뎃
        
        health -= damage;
        
        if (health <= 0) return -1; //죽으면 -1
        
        lastAttackTime = attackTime;
    }
    return health;
}