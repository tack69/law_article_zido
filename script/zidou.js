function showForm() {
    var form1 = document.getElementById("book");
    var form2 = document.getElementById("ronbun");
    var form3 = document.getElementById("hanrei");
    var form4 = document.getElementById("internet");
    var form5 = document.getElementById("hanrei0");
    var form6 = document.getElementById("zadan");
    var form7 = document.getElementById("others");

    if (document.getElementById("option1").checked) {
      form1.style.display = "block";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "none";
      form6.style.display = "none";
      form7.style.display = "none";

    } else if (document.getElementById("option2").checked) {
      form1.style.display = "none";
      form2.style.display = "block";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "none";
      form6.style.display = "none";
      form7.style.display = "none";

    } else if (document.getElementById("option3").checked) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "block";
      form4.style.display = "none";
      form5.style.display = "none";
      form6.style.display = "none";
      form7.style.display = "none";

    } else if (document.getElementById("option4").checked) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "block";
      form5.style.display = "none";
      form6.style.display = "none";
      form7.style.display = "none";
    }

    else if (document.getElementById("option5").checked) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "block";
      form6.style.display = "none";
      form7.style.display = "none";
    }

    else if (document.getElementById("option6").checked) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "none";
      form6.style.display = "block";
      form7.style.display = "none";

    }
    else if (document.getElementById("option7").checked) {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      form4.style.display = "none";
      form5.style.display = "none";
      form6.style.display = "none";
      form7.style.display = "block";
    }
};

function myF() {
  // select要素に新しいoptionを追加する
  var select = document.getElementById("place");
  mydata = "";
  // 新しいoption要素を作成する
  var option = document.createElement("option");
  option.text = searchTitle.value;
  option.value = "opti-" + new Date().getTime();

  // optionをselectに追加する
  localStorage.setItem("mydata", searchTitle.value);
  select.appendChild(option);

  document.getElementById("searchTitle").value = "";
};

function displayForm(){
    var hansentaku1 = document.getElementById("hensha-name");
    var hansentaku2 = document.getElementById("hensha-is");
    if (document.getElementById("op2").checked) {
        hansentaku1.style.display = "block";
        hansentaku2.style.display = "block";
    } else{
        hansentaku1.style.display = "none";
        hansentaku2.style.display = "none";
    }
};

function displayForm1(){
  var hansentaku1 = document.getElementById("hensha-name1");
  var hansentaku2 = document.getElementById("hensha-is1");
  if (document.getElementById("op4").checked) {
      hansentaku1.style.display = "block";
      hansentaku2.style.display = "block";
  } else{
      hansentaku1.style.display = "none";
      hansentaku2.style.display = "none";
  }
};

function displayForm2(){
  
}

function funcType() {
    var form1 = document.getElementById("book");
    var form2 = document.getElementById("ronbun");
    var form3 = document.getElementById("hanrei");
    var form4 = document.getElementById("Internet");
    var form5 = document.getElementById("hanrei0");
    var form6 = document.getElementById("zadan");
    var form7 = document.getElementById("others");

    if (document.getElementById("option1").checked) {
        button1func();
      } else if (document.getElementById("option2").checked) {
        button2func();
      } else if (document.getElementById("option3").checked) {
        button3func();
      } else if (document.getElementById("option4").checked) {
        button4func();
      } else if (document.getElementById("option5").checked) {
        button6func();
      } else if (document.getElementById("option6").checked) {
        button7func();
      } else if (document.getElementById("option7").checked) {
        button5func();
      } 

    localStorage.setItem("bookInfo", saveBookInfo.innerHTML)
};

function button1func() {
    var bookTitle = booktitle.value;
    var Han = "「第" + han.value + "版」";
    var fname = Allname.value;
    var Publisher = publisher.value;
    var PublicationYear = publicationYear.value;

    if (han.value == 0){
      Han = "";
    }

    var bookInfo = fname + "『" + bookTitle + "』" + "(" + Han + Publisher + "、" + PublicationYear + ")" ;
    //saveBookInfo.innerHTML = saveBookInfo.innerHTML + bookInfo;
    id = "item-" + new Date().getTime();
    saveBookInfo.innerHTML += "<li><input type='checkbox' id='" + id + "'><label for='" + id + "'>" + bookInfo + "</label></li>";


    document.getElementById("booktitle").value = ""
    document.getElementById("han").value = ""
    document.getElementById("Allname").value = ""
    document.getElementById("publisher").value = ""
    document.getElementById("publicationYear").value = "2020"
};

function button2func(){
    var article_Title = article.value;
    var News = news.value;
    var Kan = kan.value + "巻";
    var Go = go.value + "号 ";
    var fname = Allname2.value;
    var Publisher = publisher2.value;
    var PublicationYear = publicationYear2.value;
    var page = f_page2.value + "-" + l_page2.value;

    if (kan.value == 0){
      Kan = "";
    }

    if (go.value == 0){
      Go = "";
    }

    if (l_page2.value == ""){
      page = f_page2.value;
    }

    var bookInfo = fname + "『" + article_Title + "』" + News + '' + Kan + Go + Publisher + "、" + "(" + PublicationYear + ")" + page + "頁" ; 
    //saveBookInfo.innerHTML = saveBookInfo.innerHTML + bookInfo;
    id = "item-" + new Date().getTime();
    saveBookInfo.innerHTML += "<li><input type='checkbox' id='" + id + "'><label for='" + id + "'>" + bookInfo + "</label></li>";


    document.getElementById("article").value = "";
    document.getElementById("news").value = "";
    document.getElementById("kan").value = "";
    document.getElementById("go").value = "";
    document.getElementById("Allname2").value = "";
    document.getElementById("publisher2").value = "";
    document.getElementById("publicationYear2").value = "2020";
    document.getElementById("f_page2").value = "";
    document.getElementById("l_page2").value = "";
};

function button3func() {
  
  var Article = article2.value;
  var Hanr = hanr.value;
  var fname = Allname3.value;
  var Kan = kan.value;
  var Go = go.value;
  var Publisher = publisher3.value;
  var PublicationYear = publicationYear3.value;
  var page = f_page3.value + "-" + l_page3.value;
  var PublicationYear = publicationYear3.value;

  if (kan.value == 0){
    Kan = "";
  }

  if (go.value == 0){
    Go = "";
  }

  if (l_page3.value == ""){
    page = f_page3.value;
  }

  var bookInfo = fname + "「" + Hanr + "」" + "『" + Article + "』" + Kan + Go + "号 "  +  page + "頁" +  "(" + Publisher + "," + PublicationYear + ")"; 
  //saveBookInfo.innerHTML = saveBookInfo.innerHTML + bookInfo;
  id = "item-" + new Date().getTime();
  saveBookInfo.innerHTML += "<li><input type='checkbox' id='" + id + "'><label for='" + id + "'>" + bookInfo + "</label></li>";

  document.getElementById("article2").value = "";
  document.getElementById("hanr").value = "";
  document.getElementById("Allname3").value = "";
  document.getElementById("kan").value = "";
  document.getElementById("go").value = "";
  document.getElementById("publisher3").value = "";
  document.getElementById("publicationYear3").value = "2020";
};

function button4func() {
  var inputDate = document.getElementById("data").value;
  var date = new Date(inputDate);
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var outputDate = year + "年" + month + "月" + day + "日";

  var Publisher = publisher4.value;
  var Website = website.value;
  var Url = url.value;
  var bookInfo = Publisher + "「" + Website + "」" + "(" + Url + ",最終閲覧日 " + outputDate + ")"; 
  //saveBookInfo.innerHTML = saveBookInfo.innerHTML + bookInfo;
  id = "item-" + new Date().getTime();
  saveBookInfo.innerHTML += "<li><input type='checkbox' id='" + id + "'><label for='" + id + "'>" + bookInfo + "</label></li>";

  document.getElementById("data").value ="" ;
  document.getElementById("publisher4").value ="" ;
  document.getElementById("url").value = "";
  document.getElementById("website").value = "";
};

function button5func() {
  var bookInfo = others.value;
  id = "item-" + new Date().getTime();
  saveBookInfo.innerHTML += "<li><input type='checkbox' id='" + id + "'><label for='" + id + "'>" + bookInfo + "</label></li>";
  document.getElementById("others").value = "";
}

function button7func(){
  var Content = content.value;
  var article_Title = article0.value;
  var name0 = Allname.value;
  var Kan = kan0.value + "巻";
  var Go = go0.value + "号 ";
  var Name_said = name_said.value + "発言";
  var PublicationYear = publicationYear0.value;
  var page = f_page0.value + "-" + l_page0.value;

  if (kan.value == 0){
    Kan = "";
  }

  if (go.value == 0){
    Go = "";
  }

  if (l_page2.value == ""){
    page = f_page0.value;
  }

  var bookInfo = name0 + "「" + Content + "」" + article_Title + '' + Kan + Go + "(" + PublicationYear + ")" + page + "頁" + "[" + Name_said + "]"; 
  //saveBookInfo.innerHTML = saveBookInfo.innerHTML + bookInfo;
  id = "item-" + new Date().getTime();
  saveBookInfo.innerHTML += "<li><input type='checkbox' id='" + id + "'><label for='" + id + "'>" + bookInfo + "</label></li>";


  document.getElementById("content").value = "";
  document.getElementById("article0").value = "";
  document.getElementById("kan0").value = "";
  document.getElementById("go0").value = "";
  document.getElementById("Allname0").value = "";
  document.getElementById("name_said").value = "";
  document.getElementById("publicationYear0").value = "2020";
  document.getElementById("f_page0").value = "";
  document.getElementById("l_page0").value = "";
};

function HanshuForm() {

  selectedValue = document.getElementById("hanshu").value;
  
  if (selectedValue === "other") {
      document.getElementById("other").style.display = "block";
    } else {
      document.getElementById("other").style.display = "none"
    }
};

function button6func() {
  Hotei = hotei.value;
  Gengo = gengo.value;
  Year = nen.value + "年";
  Month = tuki.value1 + "月";
  Day = hi.value + "日";
  Hanshu = hanshu.value;
  var Kan = kan6.value + "巻";
  var Go = go6.value + "号 ";
  var Page = page6.value + "頁"

  if (hanshu.value == "other") {
    Hanshu = other_input.value
  };

  if (kan6.value == 0){
    Kan = "";
  }

  if (go6.value == 0){
    Go = "";
  }

  var bookInfo = Hotei + Gengo + Year + Month + Day + Hanshu + Kan + Go + Page
  //saveBookInfo.innerHTML = saveBookInfo.innerHTML + bookInfo;

  id = "item-" + new Date().getTime();
  saveBookInfo.innerHTML += "<li><input type='checkbox' id='" + id + "'><label for='" + id + "'>" + bookInfo + "</label></li>";


  document.getElementById("hotei").value = "";
  document.getElementById("gengo").value = "";
  document.getElementById("nen").value = "";
  document.getElementById("kan6").value = "";
  document.getElementById("go6").value = "";
  document.getElementById("page6").value = "";
};

window.onload = function () {
  var savedOutput = localStorage.getItem("bookInfo");
  if (savedOutput) {
    document.getElementById("saveBookInfo").innerHTML = savedOutput;
  };

  var savedmyF = localStorage.getItem("select");
  if (savedmyF) {
    document.getElementById("searchTitle") = savedmyF;
    
  };
    window.alert("ようこそ")
};

function deleteSelected() {
  var checkboxes = document.querySelectorAll("#saveBookInfo input[type='checkbox']");
  var saveBookInfo = document.getElementById("saveBookInfo");
  var newSaveBookInfo = "";

  for (var i = 0; i < checkboxes.length; i++) {
      if (!checkboxes[i].checked) {
          // 選択されていないチェックボックスの情報を新たな保存データに追加
          var label = document.querySelector("label[for='" + checkboxes[i].id + "']").innerHTML;
          newSaveBookInfo += "<li><input type='checkbox' id='" + checkboxes[i].id + "'><label for='" + checkboxes[i].id + "'>" + label + "</label></li>";
      }
  }

  // 新たな保存データで上書き
  saveBookInfo.innerHTML = newSaveBookInfo;

  // 出力結果をストレージに保存する
  localStorage.setItem("bookInfo", saveBookInfo.innerHTML);
};
