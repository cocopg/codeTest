function solution(n, w, num) {
    const map = [];
    let answer = 0;
    let cnt = 1;
    let x, y;

    //n개의 번호를 w개의 열로 나눔
    for (let i = 0; i < Math.ceil(n / w); ++i) {
        const row = [];
        for (let j = 0; j < w; ++j) {
            if (cnt > n) {
                row.push(null);
                continue;
            }
        //현재 cnt가 num과 동일하면 위치저장
      if (cnt === num) {
        y = i;
        x = Math.ceil(cnt / w) % 2 === 0 ? w - j - 1 : j;
      }

      row.push(cnt); //행에 현재 숫자 추가
      ++cnt;
    }

    if (i % 2 === 1) row.reverse(); //홀수행이면 좌우반전(지그재그)
    map.push(row);
  }

    //숫자 개수 카운트
  while (y < map.length && map[y][x] !== null) {
    ++answer;
    ++y;
  }

  return answer;
}