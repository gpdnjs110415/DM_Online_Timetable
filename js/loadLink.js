/*
문학 - ko
영어1 - en
중국어1 - ch
운동과 건강1 - pe
물리학1 - sc
자료구조 - jg -
성공적인 직업생활 - sj
공업수학 - gs
응용프로그래밍 화면구현 - uh
응용프로그래밍 개발 - ug
정보통신 - jt 
정보보호관리 - jb
수학1 - mt
문화콘텐츠산업일반 - mc
정보처리와 관리 - jc
회계원리 - hw
상업경제 - sc
음악콘텐제작 - uc
광고콘텐츠제작 - gc
*/

let ORDER = localStorage.getItem("order");

let CLASSROOM = 'https://classroom.google.com/u/';
let goorm = 'https://dimigo.goorm.io/learn/lecture/'

//링크 변하지 않음
let ko = 'https://www.youtube.com/playlist?list=PLBNTx0xUeB5zMR2uPx69fM9_QRzevCfd2';
let jg = goorm + '18187/2020-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0'; //구름
let uh = goorm + '18113/2020-%EC%9D%91%EC%9A%A9-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%ED%99%94%EB%A9%B4-%EA%B5%AC%ED%98%84'; //구름
let up = goorm + '18184/2020-%25EC%259D%2591%25EC%259A%25A9%25ED%2594%2584%25EB%25A1%259C%25EA%25B7%25B8%25EB%259E%2598%25EB%25B0%258D-%25EA%25B0%259C%25EB%25B0%259C'; //구름
let sj = 'https://us04web.zoom.us/j/2595003827'; //zoom화상수업
let hw = 'https://www.youtube.com/playlist?list=PLBNTx0xUeB5z9gRK3_mtMrV3uJDPc3V4h';
let gc = 'https://www.youtube.com/playlist?list=PLBNTx0xUeB5z9gRK3_mtMrV3uJDPc3V4h';

//공통 클래스룸
let en = CLASSROOM + ORDER + '/c/NTQ3NzA5MjMzNjVa'; //123456
let ch = CLASSROOM + ORDER + '/c/NTI3MjU1MDc4MTJa'; //123456
let pe = CLASSROOM + ORDER + '/c/NTQ0MTkzNjQ1NzNa'; //123456
let sc = CLASSROOM + ORDER + '/c/NTQ3NzQwNTc5NzFa'; //3456
let uc = CLASSROOM + ORDER + '/c/NTI4NTk2NzY0OTJa'; //12

//반별 클래스룸
let gs3 = CLASSROOM + ORDER + '/c/NTMxMjU4NjcxMTZa'; //3456
let gs4 = CLASSROOM + ORDER + '/c/NTMxMzI5MzYzNzda';
let gs5 = CLASSROOM + ORDER + '/c/NTMxMzI5MzYzODZa';
let gs6 = CLASSROOM + ORDER + '/c/NTMxMzI5MzYzOTNa';
let jt3 = CLASSROOM + ORDER + '/c/NTI3ODk1MTA1ODVa'; //3456
let jt4 = CLASSROOM + ORDER + '/c/NTI3ODk1MTA1OTRa';
let jt5 = CLASSROOM + ORDER + '/c/NTI3ODk1MTA2MDRa';
let jt6 = CLASSROOM + ORDER + '/c/NTI3ODk1MTA2MTJa';
let jb5 = CLASSROOM + ORDER + '/c/NTI4NTk2NzY0OTJa'; //56
let jb6 = CLASSROOM + ORDER + '/c/NTI5MTY3NTc3MDZa';
let mt1 = CLASSROOM + ORDER + '/c/NTM3NzM2MDE0Njla'; //123456
let mt2 = CLASSROOM + ORDER + '/c/NTM3NzM2MDE0NDha';
let mt3 = CLASSROOM + ORDER + '/c/NTM3NzM2MDE0NjFa';
let mt4 = CLASSROOM + ORDER + '/c/NTM3NzM2MDE0Njla';
let mt5 = CLASSROOM + ORDER + '/c/NTM3Nzk0ODc4MjVa';
let mt6 = CLASSROOM + ORDER + '/c/NTM3Nzk0ODc4MzNa';

let mc1 = CLASSROOM + ORDER + '/c/NTQ3NzQwNTc5NzFa'; //12
let mc2 = CLASSROOM + ORDER + '/c/NTI5MTcxODk4MjJa';
let jc1 = CLASSROOM + ORDER + '/c/NTMxMzI5MzYzNzda'; //12
let jc2 = CLASSROOM + ORDER + '/c/NTI4NTYwNTQ3NDRa';
let sk1 = CLASSROOM + ORDER + '/c/NTI3ODk1MTA1OTRa'; //12
let sk2 = CLASSROOM + ORDER + '/c/NTQ4ODI4NjAyNzda';


function goToLink(subject) {
    window.open(subject);
}