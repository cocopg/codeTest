function solution(s, skip, index) {var answer = '';
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
                                   
  return s
    .split("")
    .map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length])
    .join("");
}