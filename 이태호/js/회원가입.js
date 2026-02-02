// 내가 한 것
//input 상자 접근
// let userId = document.querySelector('#user-id');
// let userPw1 = document.querySelector('#user-pw1');
// let userPw2 = document.querySelector('#user-pw2');

// //입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
// // id 길이 체크 change 이벤트 사용
// // 조건 3글자 이상 10글자 이하
// // select(); 사용
// userId.addEventListener("change", idCheck)

// function idCheck() {
//   let id = userId.value.length;
//   if(id < 3 || id > 10) {
//     alert('아이디는 3자리 이상 10자리 이하입니다');
//     userId.select();
//   }
// }

// // 비밀번호 길이 체크 change 이벤트 사용
// // 조건 4자리 이상
// // 입력된 값 초기화 .value = "";
// // focus(); 사용
// userPw1.addEventListener("change", pw1Check)

// function pw1Check() {
//   let pw1 = userPw1.value.length;
//   if(pw1 < 4) {
//     alert('비밀번호는 4자리 이상입니다');
//     userPw1.value = "";
//     userPw1.focus();
//   }
// }
// // 비밀번호가 맞는지 확인 change 이벤트 사용
// // 조건 비밀번호와 일치
// // 입력된 값 초기화 .value = "";
// // focus(); 사용
// userPw2.addEventListener("change", pw2Check)

// function pw2Check() {
//   if(userPw1.value !== userPw2.value) {
//     alert('비밀번호가 일치하지 않습니다');
//     userPw2.value = "";
//     userPw2.focus();
//   }
// }


// 교수님이 하신 것
//input 상자 접근
let uId = document.querySelector('#user-id');
let pw = document.querySelector('#user-pw1');
let pwc = document.querySelector('#user-pw2');

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
uId.onchange = idCheck;
pw.onchange = pwCheck;
pwc.onchange = pwComp;

// id 길이 체크(3 <= id길이 <=10)
function idCheck () {
  let idLen = uId.value.length;
  if(idLen < 3 || idLen > 10) {
    alert('3글자 이상 10글자 이하를 입력하세요');
    uId.select();
  }
}
// 비밀번호 길이 체크
function pwCheck () {
  let pwLen = pw.value.length;
  if(pwLen < 4) {
    alert('4글자 이상 입력하세요');
    pw.value = "";
    pw.focus();
  }
}
// 비밀번호가 맞는지 확인
function pwComp () {
  if(pw.value != pwc.value) {
    alert('값이 일치하지 않습니다');
    pwc.value = "";
    pwc.focus();
  }
}