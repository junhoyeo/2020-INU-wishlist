var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";

  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");

function newElement() {
  var li = document.createElement("li");
  var inputValue1 = document.getElementById("myInput1").value;
  var inputValue2 = document.getElementById("myInput2").value;
  var t1 = document.createTextNode(inputValue1);
  var t2 = document.createTextNode(inputValue2);
  var say1 = document.createTextNode("2020, INU는 ");
  var say2 = document.createTextNode(" 동아리가 되고 싶어요.");
  var say3 = document.createTextNode(" 그러기 위해서 ");
  var say4 = document.createTextNode(" 거에요.");

  li.appendChild(say1);
  li.appendChild(t1);
  li.appendChild(say2);
  li.appendChild(say3);
  li.appendChild(t2);
  li.appendChild(say4);

  if (inputValue1 === "" || inputValue2 === "") {
    alert("내용을 모두 입력하세요.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  //추가 후 두 칸의 value를 비우는 작업
  document.getElementById("myInput1").value = "";
  document.getElementById("myInput2").value = "";

  var span = document.createElement("SPAN");
  span.style.marginLeft = "20px";
  span.style.cursor = "pointer";
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
