// 입력상자와 버튼에 접근
let book = document.querySelector('#book');
let addBtn = document.querySelector('#add');
let bookList = document.querySelector('#bookList');


// 도서 목록 저장 배열 생성
let books = [];


// 추가 버튼에 클릭 이벤트 연결
addBtn.addEventListener('click', addBook);
/* book.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // 기본 동작 방지
    // 추가적인 작업 수행
    addBook(); // 선택적으로 false 반환
  }
}); */
book.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // 기본 동작 방지
    // 추가적인 작업 수행
    addBook(); // 선택적으로 false 반환
  }
});


// 배열에 도서 목록 추가
function addBook() {
  let bookData = book.value;
  if(bookData == '') {
    alert('책 제목을 입력하세요');
  }else{
    if(books.indexOf(bookData) != -1) {
      alert('이미 존재하는 책입니다');
    }else{
      books.push(bookData);
    }
  }
  book.value = '';
  book.focus();
  // console.log(books);
  showFunc();
}

// 문서에 도서목록 출력(<ul><li>)
// ul > li > span(class='del') 삭제
function showFunc() {
  /* let list = '<ul>';
  for(let idx in books) {
    list += `
      <li>${books[idx]}
        <span class='del' id=${idx}>삭제</span>
      </li>
      `;
  }
  list += '</ul>'; */
  // <ul>생성
  let nodeUl = document.createElement('ul');
  for(let idx in books) {
    // <li>생성
    let nodeLi = document.createElement('li');
    let liText = document.createTextNode(books[idx]);
    nodeLi.appendChild(liText);

    // <span>생성
    let nodeSpan = document.createElement('span')
    let spanText = document.createTextNode('삭제');
    nodeSpan.setAttribute('class', 'del', 'id', idx);
    nodeSpan.appendChild(spanText);
    
    // 자식추가
    nodeLi.appendChild(nodeSpan);
    nodeUl.appendChild(nodeLi);
  }
  // bookList 내부의 태그들 초기화
  bookList.innerHTML = "";
  // 자식추가
  bookList.appendChild(nodeUl);

  // console.log(list);

  // 삭제 대상 span이 클릭되어지면
  let delList = document.querySelectorAll('.del');
  console.log(delList);
  for(let ele of delList) {
    ele.addEventListener('click', delFunc);
  }
}

// 문서에 도서 목록 삭제
function delFunc() {
  let delNum = this.getAttribute('id');
  books.splice(delNum, 1);
  showFunc();
}