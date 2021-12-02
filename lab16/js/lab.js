/*
* Author: Margarita Rodriguez
* Created: 1 December 2021
*
* License: Public Domain
*
* All API images are from https://xkcd.com/
*/

var myUrl = "https://xkcd.com/info.0.json";

function callAjax() {
  $.ajax({
    url: myUrl,
    type: "GET",
    dataType: "json",
    success: function(data) {
      var comicObj = data;
      console.log("comicObj = ", comicObj);
      $("#output").append('<img src="' + comicObj.img + '">');
      $("#output").append("<p>Title: " + comicObj.title);
      $("#output").append("<p>Alt: " + comicObj.alt);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error: ", textStatus, errorThrown);
    }
  })
}
callAjax();
