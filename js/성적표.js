
/* // 함수: 특정한 기능을 하는 명령어 집합
// 함수 정의: 함수의 내용을 만들어 놓는 것
// 함수 호출: 함수 실행
// * 스코프(유효범위): 변수의 사용 범위
var a = 20;
let script = 30;
let result = 999;
// 함수 정의
function sum(n){
  let result = 0;
  for(let i=1; i<=n; i++){
    result += i;
  }
  return result;
}
// 함수 실행(호출)
console.log(sum(5));
console.log(result);

// min에서 max까지 합을 구하는 함수 정의
// let min = 5;
// let max = 10;
// result = 0;
// 함수 정의
function minSum(start=0, end=0){
  let result = 0;
  for(let i=start; i<=end; i++){
    result += i;
  }
  return result;
}
// 함수 호출
result = minSum(1, 2);
console.log(result);

// 익명함수: 이름이 없는 함수 => 변수에 저장
const plus = function(a, b){
  return `${a} + ${b} = ${a+b}`;
}
console.log(plus(100, 200));

// 즉시 실행 함수
result = (function(a, b){
    return `${a} - ${b} = ${a-b}`;
  })(300, 100);
console.log(result);

// 결과로 함수가 전달
result = (function(){
  return function(a, b){
    return `${a} - ${b} = ${a-b}`;
  }
})();
console.log(result);
console.log(result(500, 400)); */

// 콜백함수: 함수의 매개변수에 값으로 전달되는 함수
// 실행순서가 있는 경우 사용
// 커피 주문 => 커피 완성
// 커피완성 함수

// 선언함수
// function done(coffee){
//   console.log(`${coffee} 준비 완료`);
// }

// 익명함수
// const done = function(coffee){
//   console.log(`${coffee} 준비 완료`);
// }

// 화살표 함수 (function: =>) 간략하게 표현
// 익명함수만 화살표로 변경
/* const done = (coffee) => {
  console.log(`${coffee} 준비 완료`);
}

// 커피 주문 함수
function order(coffee, callback){
  console.log(`${coffee} 주문 접수`);
  setTimeout(function(){
    callback(coffee);
  }, 2000);
}

order('아메리카노', done);
order('라떼', done);
order('에스프레소', done); */

// 펼침연산자(...변수명)
// 배열의 합
/* let nums = [10,20,30,40,50,60,70];
let sum3 = (x, y, ...restparams) => {
  // 합을 구하기
  let sum = x+y;
  let arg = restparams.length;
  for(let i=0; i<arg; i++){
    sum += restparams[i];
  }
  // 결과 리턴
  return sum;
};
console.log(`배열의 합 = ${sum3(...nums)}`); */


/* console.log('이름   총점   평균   등급');

let record = (n, k, m, e) => {
  let total = k+m+e;
  let avg = parseInt(total/3);
  let grade = '';
  let result = '';
  if(avg >= 90){
    grade += 'A';
  }else if(avg >= 80){
    grade += 'B'
  }else if(avg >= 70){
    grade += 'C'
  }else if(avg >= 60){
    grade += 'D'
  }else{
    grade += 'F'
  }
  result += `${n}   ${total}   ${avg}   ${grade}`;
  return result;
}

while(true){
  let name = prompt('이름을 입력하세요');
  if(name == undefined) break;
  let kor = Number(prompt('국어 성적을 입력하세요'));
  let math = Number(prompt('수학 성적을 입력하세요'));
  let eng = Number(prompt('영어 성적을 입력하세요'));
  
  console.log(record(name, kor, math, eng));
} */

let layout = '<table>'
layout += `<h3>성적표</h3><tr><th>이름</th><th>총점</th><th>평균</th><th>등급</th></tr>`;
let record = (n, k, m, e) => {
  let total = k+m+e;
  let avg = parseInt(total/3);
  let grade = '';
  if(avg >= 90){
    grade = 'A';
  }else if(avg >= 80){
    grade = 'B'
  }else if(avg >= 70){
    grade = 'C'
  }else if(avg >= 60){
    grade = 'D'
  }else{
    grade = 'F'
  }
  layout += `<tr><td>${n}</td><td>${total}</td><td>${avg}</td><td>${grade}</td></tr>`;
  //return layout;
}

while(true){
  let name = prompt('이름을 입력하세요');
  if(name == undefined) break;
  let kor = Number(prompt('국어 성적을 입력하세요'));
  let math = Number(prompt('수학 성적을 입력하세요'));
  let eng = Number(prompt('영어 성적을 입력하세요'));
  
  
  // layout += `<tr>${document.write(record(name, kor, math, eng))}</tr>`;
  // layout += console.log(name, kor, math, eng);
  record(name, kor, math, eng);
}
layout += '</table>';
document.write(layout);