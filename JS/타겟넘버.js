//https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;
  function dfs(level, sum) {
    if (level === length.numbers) {
      if (sum === target) {
        answer++;
      }
      return; //재귀 호출의 종료 조건을 만족했을 때 현재 함수 호출을 종료하고 이전 레벨로 돌아가기 위해 사용
    }
    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  }

  dfs(0, 0);
  return answer;
}
