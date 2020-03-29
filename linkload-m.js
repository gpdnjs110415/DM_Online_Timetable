/*
문학 - ko+
영어1 - en+
중국어1 - ch+
운동과 건강1 - pe+
문화콘텐츠산업일반 - mc 1(https://classroom.google.com/u/0/c/NTI5MTUwMzEwODBa)
정보처리와 관리 - jc 1(https://classroom.google.com/u/0/c/NTI4NTYwNTQ3MTha)
회계원리 - hw+
상업경제 - sk 1(https://classroom.google.com/u/0/c/NTQ4ODI4NjAyNTFa)
음악콘텐제작 - uc 1(https://classroom.google.com/u/0/c/NTQ0MTI2NjY5NjZa)
광고콘텐츠제작 - gc 디코
수학1 - mt 1(https://classroom.google.com/u/0/c/NTM3NzM2MDE0NDBa) 3(https://classroom.google.com/u/1/c/NTM3NzM2MDE0NjFa)
*/

//해당 반에 해당하는 과목 하이퍼링크 띄우기

var ORDER = 0;

function subjectLink(){
    ORDER = localStorage.getItem("order");

    var link_en =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTQ3NzA5MjMzNjVa';
    var link_ch =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTI3MjU1MDc4MTJa';
    var link_pe =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTQ0MTkzNjQ1NzNa';
    var link_mc =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTQ3NzQwNTc5NzFa';
    var link_jc =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTMxMzI5MzYzNzda';
    var link_sk =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTI3ODk1MTA1OTRa';
    var link_uc =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTI4NTk2NzY0OTJa';
    var link_mt =  'https://classroom.google.com/u/'+`${ORDER}`+'/c/NTM3NzM2MDE0Njla';

    //1,2반
    /*
    document.querySelector('.mc').setAttribute('href', 'https://classroom.google.com/u/0/c/NTI5MTUwMzEwODBa');
    document.querySelector('.jc').setAttribute('href', 'https://classroom.google.com/u/0/c/NTI4NTYwNTQ3MTha');
    document.querySelector('.sk').setAttribute('href', 'https://classroom.google.com/u/0/c/NTQ4ODI4NjAyNTFa');
    document.querySelector('.uc').setAttribute('href', 'https://classroom.google.com/u/0/c/NTQ0MTI2NjY5NjZa');*/

}

subjectLink();