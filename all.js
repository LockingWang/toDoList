const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");

let data = [];

//將data內的資料貼到清單上之函式。
function renderData(){
    let str = "";
    data.forEach(function(item,index){
    console.log(item);
    str += `<li>${item.content}<input type="button" data-num="${index}" class="delete" value="刪除待辦"></li>`
    });

    console.log(str);
    const list = document.querySelector(".list");
    list.innerHTML = str;
};

//待辦新增功能

save.addEventListener("click",function(e){
    if (txt.value == ""){
        alert("待辦事項不得為空白內容。");
        return
    };
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value = "";
});

//刪除待辦功能

list.addEventListener("click",function(e){
    if (e.target.getAttribute("class") !== "delete"){
        return;
    }
    let num = e.target.getAttribute("data-num");
    data.splice(num,1);
    renderData();
    alert("刪除成功!");
});