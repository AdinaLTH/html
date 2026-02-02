function Student(name, kor, eng, math, java) {
  this.name = name,
  this.kor = kor,
  this.eng = eng,
  this.math = math,
  this.java = java
}

// 생성자 함수의 공통 공간에 생성 -> 모든 인스턴스(객체)가 사용하도록 함(메모리 공간 효율적으로 사용 가능)
Student.prototype.getSum = function () {
  return this.kor + this.eng + this.math + this.java;
}

Student.prototype.getAvg = function () {
  return parseInt(this.getSum() / 4);
}

Student.prototype.getGrade = function () {
  let grade = '';
  switch(parseInt(this.getAvg()/10)) {
    case 10: 
    case 9: grade = 'A'
    break;
    case 8: grade = 'B'
    break
    case 7: grade = 'C'
    break;
    case 6: grade = 'D'
    break
    default: grade = 'F'
  }
  return grade;
}