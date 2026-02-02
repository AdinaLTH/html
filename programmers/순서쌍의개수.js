let n = 20;
function solution(n) {
  let answer = 0;
  for(let i=1; i<=n; i++) {
    n%i == 0 ? answer++ : answer
  }
  return answer;
}
console.log(solution(n));