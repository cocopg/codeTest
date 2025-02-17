function solution(keymap, targets) {
    let answer = [];

    targets.forEach(target => {
        let press = 0;

        for (let i = 0; i < target.length; i++) {
            let cnt = Infinity;

            keymap.forEach(key => {
                const idx = key.indexOf(target[i]);
                if (idx > -1) cnt = Math.min(cnt, idx + 1);
            });

            if (cnt === Infinity) {
                press = -1;
                break;
            }
            press += cnt;
        }

        answer.push(press);
    });

    return answer;
}
