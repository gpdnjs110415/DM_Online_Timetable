var ORDER = 0; //0이 1번째

function orderSave(getClass) {
    ORDER = document.getElementById("whatorder");
    var nORDER = ORDER.options[ORDER.selectedIndex].value;
    //로컬에  order, 방문기록 저장
    localStorage.setItem("order", nORDER);
    let URL = 'pages/' + getClass + '.html'
    window.location.href = URL;
}