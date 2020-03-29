/*
문학 - ko+
영어1 - en+
중국어1 - ch+
운동과 건강1 - pe+
물리학1 - sc+
자료구조 - jg+ - 구름
성공적인 직업생활 - sj+ - 화상수업
공업수학 - gs 3(https://classroom.google.com/u/1/c/NTMxMjU4NjcxMTZa)
응용프로그래밍 화면구현 - fn+ - 구름
응용프로그래밍 개발 - bn (http://bitly.kr/bo7tS3zV) - 구름
정보통신 - jt 3(https://classroom.google.com/u/1/c/NTI3ODk1MTA1ODVa)
정보보호관리 - jb
수학1 - mt 1(https://classroom.google.com/u/0/c/NTM3NzM2MDE0NDBa) 3(https://classroom.google.com/u/1/c/NTM3NzM2MDE0NjFa)


gs, bn, jt, jb, mt, mc, jc, sk, uc */

//해당 반에 해당하는 과목 하이퍼링크 띄우기

var ORDER = 0;
const testtext = document.querySelector('.testtest');
const math = document.querySelector('.mt');
const plz = document.querySelector('.plz');

function subjectLink(){
    ORDER = localStorage.getItem("order");
    console.log(ORDER);

    var link_en =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTQ3NzA5MjMzNjVa';
    var link_ch =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTI3MjU1MDc4MTJa';
    var link_pe =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTQ0MTkzNjQ1NzNa';
    var link_sc =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTQ3NzQwNTc5NzFa';
    var link_gs =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTMxMzI5MzYzNzda';
    var link_jt =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTI3ODk1MTA1OTRa';
    var link_jb =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTI4NTk2NzY0OTJa';
    var link_mt =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTM3NzM2MDE0Njla';

    testtext.innerHTML = link_mt;
    plz.setAttribute('href', link_mt);

    switch(ORDER){
        case 0:
        case 1: math.setAttribute('href', link_mt); break;
        default: break;
    }

}

function init(){
    subjectLink();
}

init();