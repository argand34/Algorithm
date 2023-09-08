//https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);
  function dfs(num) {
    visited[num] = true;
    answer++;
    for (let i = 0; i < n; i++) {
      if (!visited[i] && computers[num][i] === 1) {
        visited[i] = true;
        dfs(i);
      }
    }
  }
  for (let g = 0; g < n; g++) {
    if (!visited[g]) {
      answer++;
      dfs(g);
    }
  }
  return answer;
}

////////////////////////////////////////////////////////
function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);
  function dfs(etc) {
    visited[etc] = true;
    for (let i = 0; i < n; i++) {
      if (computers[etc][i] === 1) {
        if (visited[i] != true) {
          dfs(i);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      answer++;
      dfs(i);
    }
  }
  return answer;
}
