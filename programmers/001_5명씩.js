/*
문제 설명
최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 
앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 
마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

제한사항
5 ≤ names의 길이 ≤ 30
1 ≤ names의 원소의 길이 ≤ 10
names의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.

입출력 예
names	result
["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]	["nami", "vex"]

*/

function solution(names) {
  let groups = []; // 빈 배열 생성

  for (let i = 0; i < names.length; i++) {
    // 반복문을 통해 names 안의 모든 요소 순환
    if (i % 5 === 0) {
      //5명이 넘을때마다 새로운 그룹 생성  -> groups : [ [그룹1], [그룹2]]
      groups.push([]);
    }

    groups[groups.length - 1].push(names[i]); // 가장 마지막 그룹에 이름 추가
  }

  return groups.map((group) => group[0]); // 각 그룹의 첫번째 요소 출력
}
