/*
문학 - ko
영어1 - en
중국어1 - ch
운동과 건강1 - pe
물리학1 - sc
자료구조 - jg
성공적인 직업생활 - sj
공업수학 - gs
응용프로그래밍 화면구현 - fn
응용프로그래밍 개발 - bn
정보통신 - jt
정보보호관리 - jb
수학1 - mt
문화콘텐츠산업일반 - mc
정보처리와 관리 - jc
회계원리 - hw
상업경제 - sk
음악콘텐제작 - uc
광고콘텐츠제작 - gc */

//확인버튼 클릭해서 제출하기
//해당 반에 해당하는 과목 하이퍼링크 띄우기

var didWent = localStorage.getItem("went");
var popupStyle = document.getElementById("js-popup");
var ORDER = 0; //0이 1번째
var CLASS = 1; //1반부터 6반까지

function popup(){
    ORDER = document.getElementById("whatorder");
    var nORDER = ORDER.options[ORDER.selectedIndex].value;
    CLASS = document.getElementById("whatclass");
    var nCLASS = CLASS.options[CLASS.selectedIndex].value;
    //로컬에  order, class, 방문기록 저장
    localStorage.setItem("class", nCLASS);
    localStorage.setItem("order", nORDER);
    localStorage.setItem("went", 'true');
    popupStyle.style.opacity = 0;
}

function subjectLink(){
    ORDER = localStorage.getItem("order");
    CLASS = localStorage.getItem("class");

}

function popupWrite(){
    if(didWent != null){
        popupStyle.style.opacity = 0;
    }
}

function init(){
    popupWrite();
    subjectLink();
}

init();