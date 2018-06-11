// var app = chrome.runtime.getBackgroundPage();

function wordReplacement() {
  let beforeWord = document.getElementsByName('before')[0].value;
  let afterWord = document.getElementsByName('after')[0].value;
  console.log(beforeWord, afterWord);

  $(document).ready(function(){
    var reg = new RegExp(beforeWord, "g");
    $("body").children().each(function(){
      $(this).html($(this).html().replace(reg, afterWord))
    })
  })
};

document.getElementById('wordRep').addEventListener('click', wordReplacement);