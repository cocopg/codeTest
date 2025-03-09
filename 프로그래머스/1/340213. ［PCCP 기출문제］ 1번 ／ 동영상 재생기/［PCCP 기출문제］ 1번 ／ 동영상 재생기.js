function solution(video_len, pos, op_start, op_end, commands) {
    let mPos = toMinutes(pos);
    function toMinutes(time) {
        const [h, m] = time.split(":");
        return Number(h) * 60 + Number(m);
        }
    const mOpStart = toMinutes(op_start);
    const mOpEnd = toMinutes(op_end);
    const mVideo = toMinutes(video_len);//시간을 모두 분으로 변환
    
    if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;//오프닝 넘어가기
    
    commands.forEach((p) => {
    mPos += p === "next" ? 10 : -10;
    if (mPos < 0) mPos = 0;
    if (mPos > mVideo) mPos = mVideo;
    if (mPos >= mOpStart && mPos <= mOpEnd) mPos = mOpEnd;
  });
  const h = Math.floor(mPos / 60) + "";//시간으로 단위 변환
  const m = (mPos % 60) + "";

  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
}
