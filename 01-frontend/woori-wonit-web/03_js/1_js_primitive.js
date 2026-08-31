// https://runjs.app/play

/*
여러줄
주석
*/ 
// 반복문 : 똑같은 일을 계속하지 않으려고
// 조건문 : 상황에 따라 다른 결과를 만들기 위해서 -> 미디어쿼리로 현재 화면 사이즈에 다라 다른 배경화면을 출력

// 한 줄 주석
// html -> CSS -> JS 입히는 방식으로 화면을 렌더링하기 때문에 하나의 파일에 이 코드들을 작성할 때는 BODY의 맨 마지막에 <script> </script> 사이에 작성합니다.

/* 
1. 변수  : 숫자 / 문자 / boolean / null / undefined / symbol / object 다 됨.
선언과 할당으로 변수를 만들 수 있습니다. 
- var : 매번 만들고 지울 수 있는 방 
- let : 한번 만들면 값을 바꾸는 건 가능하지만, 새로 지우고 만들 수 없는 방
- const : 한번 만들면 값을 바꾸는 것도 불가능하고, 새로 지우고 만들 수도 없는 방
*/

var a = 1; // 선언과 동시에 할당

var b; // 선언만 하고 할당은 나중에 가능
b = 2; // 할당

let c = 3; // 선언과 동시에 할당
let d; // 선언만 하고 할당은 나중에 가능
d = 4; // 할당
// let d = 5; // let은 새로 선언할 수 없습니다. 이미 선언된 변수명은 재사용 불가

const e = 5; // 선언과 동시에 할당
// const f; // 선언만 하고 할당은 불가능. 반드시 선언과 동시에 할당해야 합니다.


// 코드가 길어지면, 여러사람이 작업을 하게 되면 var는 권장되지 않습니다. 
// const로 다 만들고 나서 변경이 필요해지는 변수들은 let으로 바꾸기를 권장합니다. 

/*
2. 변수 명명규칙
# camelCase, : 소문자로 시작하고 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙 
## snake_case, : 소문자로 시작하고 띄어쓰기 자리마다 _로 처리하는 이름 규칙
### PascalCase : 첫 글자를 대문자로 시작하고 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙

- camelCase 또는 snake_case를 권장합니다.
- class를 만들때는 PascalCase를 씁니다.
- 숫자, _, $을 변수명에 사용 가능합니다. 근데 숫자는 맨 앞에는 들어올 수 없습니다.
- 공백, 마침표, 자바스크립트가 이미 쓰는 keyword(예약어)는 불가합니다.

*/



/*
3. 자료형 
- 7가지 기본자료형(primitive, 원시자료형), 참조자료형(reference, JS에서는 모두 object로 찍힘)  
  - number(숫자)
  - string(문자열)
  - boolean: true, false로 반환
  - null: 값이 없음. 자료형은 object로 찍힘. 웬만하면 우리가 작성하는 빈방에는 null로 채웁니다.
  - undefined: 정의되지 않음
      - 값을 대입하지 않은 변수 / 리턴이 없는 함수의 실행 결과 / 존재하지 않는 속성을 가리킬 때 자바스크립트가 돌려주는 결과
  - symbol: 고유하고 변경할 수 없는 값.
  - bigInt : 아주 큰 숫자, 숫자 뒤에 소문자 n을 붙여서 관리. 
  - object: 객체
    - 배열, 날짜, 함수, Map, Set, 정규식
*/

var num = 3.141592; 
num
var bigIntNum = 1234567890123456789012345678901234567890n; // 숫자 뒤에 소문자 n을 붙여서 관리
bigIntNum

typeof(num);
console.log(typeof(num)); // number

// BigInt
// number가 100% 정확하게 표현할 수 있는 가장 큰 정수는 9,007,199,254,740,991(약 9007조)입니다. 이 숫자를 넘어가는 순간 자바스크립트는 계산 실수를 하기 시작합니다.
console.log(9007199254740992 === 9007199254740993); // true
// 1. 숫자 끝에 n 붙이기 (가장 많이 씀)
const bigNum1 = 123456789012345678901234567890n;

// 2. BigInt() 함수 사용하기 (주로 문자열을 변환할 때 씀)
const bigNum2 = BigInt("123456789012345678901234567890");

// String : 문자들을 순서대로 늘어놓은 덩어리
var str = "안녕하세요";
console.log(typeof(str)); // string

var str1 = '안녕하세요';
var str2 = "\"" + str + "\"라고 김연지가 말했다."; // escape 문자로 "를 출력하고 싶을 때는 \"로 작성합니다.

console.log(str2); // "안녕하세요"라고 김연지가 말했다.


// -3. boolean - 소문자로 작성합니다: true / false
var isTrue = true;
console.log(isTrue); // true

// -4. null
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.
// js에서 null을 확인할 때는 Boolean으로 형변환을 해서 false 여부로 null 타입을 체크합니다.
// 개발자가 대입해 놓은 답 없음 : null
// 인터프리터가 코드를 돌렸는데 돌려줄 게 없음 : undefined
var null1 = null;
var null2 = "";
var null3 = undefined;
var null4 = 0;
var null5;
console.log(typeof(null1));
console.log(typeof(null2));
console.log(typeof(null3));
console.log(typeof(null4));
console.log(typeof(null5));
console.log(Boolean(null1));
console.log(Boolean(null5));

// 자료형을 대문자로 쓰면 해당 자료형으로 형변환이 됩니다.
var avg = 300;
console.log(`평균점수: ${avg}입니다.`);

console.log(Number("90"));
console.log(Number("90년대")); // Not a Number

// Boolean() : false, 0, null, undefined, '', NaN는 false /  빈 참조 자료형은 true 가 나옴.[] , {}


/* 실습:
- alert() - 출력만 가능한 팝업을 띄우는 함수
- confirm() - true, false 값만 입력받을 수 있습니다.
- prompt() - 값을 직접 입력받을 수 있습니다. input()

mathScore 라는 변수에 수학점수, engScore라는 변수에 영어점수를 입력받고 
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 
 */ 



/* 4. 연산자 우선순위 - 다른언어와 같습니다
  1) ( )- 감싸준 연산자가 제일 상위에 동작
  2) ** 제곱
  3) -, 음수부호 
  4) * / %(나머지) 
  5) +, - 연산이 동작합니다.
  6) ++, --   a -=  1   a--(후위식) / --a(전위식)
*/

var num  = 0;
num++; // 후위증가연산자 쓰고 메모리에 돌려놓을 때 1을 더해서 돌려놓음
++num; // 쓸 때 1을 더하고 사용한다 : 전위증가연산자


/* 5. 비교연산자
== (항등연산자, 동등성 비교): 값이 같은지
=== (완전항등연산자, 동일성 비교): 자료형, 값까지 비교
*/

console.log(1 == "1");
console.log(1 == "1" && typeof(1) == typeof ("1"));
console.log(1 === "1");

/* 
6. 논리연산자 &&(and), ||(or), !(not) 
*/

// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 


/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */
// let date = new Date() // 현재 날짜와 시간 기준으로 생성
// date = new Date("2025/12/25"); // 입력받은 문자열을 파싱하여 생성 - 한국시간대라서 -9해서 출력됨
// date
// date.getFullYear();
// date.getMonth()+1; // 월이 0부터 시작함 
// date.getDate();
// date.getDay(); // 0(일) ~ 6(토)
// date.getHours(); // 0 ~ 23
// date.getMinutes(); // 0 ~ 59


var date = new Date();
var hour = date.getHours();

if(hour < 12) {
    console.log(`AM ${hour} `);
} else {
    console.log(`PM ${hour}`);
}

/* switch (명제) {
    case (1) : 조건 만족시 실행문
               break;
    case (2) : 조건 만족시 실행문
               break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문 
              break; // 마지막이면 안 걸어도 됩니다.
}
*/



/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */
var menu = "아무거나";

switch(menu) {
  case ("짜장면") :
    console.log(`${menu} 를 드시는 군요.`);
    break; // 코드 블록 바깥으로 강제로 나가게 만드는 명령문
  case ("짬뽕") :
    console.log(`${menu} 를 드시는 군요.`);
    break;
  case ("샐러드") :
    console.log(`${menu} 를 드시는 군요.`);
    break;
  default :
    console.log("그럼 뭐 드실래요?");
}

var menu1 = "아무거나";
if(menu1 === "짜장면") {
  console.log(`${menu1} 를 드시는 군요`);
} else if(menu1 === "짬뽕") {
  console.log(`${menu1} 를 드시는 군요`);
} else if(menu1 === "샐러드") {
  console.log(`${menu1} 를 드시는 군요`);
} else {
  console.log("그럼 뭐 드실래요?");
}

if(menu1 === "짜장면" || menu1 === "짬뽕" || menu1 === "샐러드") {
    console.log(`${menu1} 를 드시는 군요`);
}else {
  console.log("그럼 뭐 드실래요?");
}

// 삼항연산자 - 불표현식 ? 참 : 거짓
var menu2 = "아무거나";
console.log((menu1 === "짜장면" || menu1 === "짬뽕" || menu1 === "샐러드") ? "같이먹기" : "따로먹기");