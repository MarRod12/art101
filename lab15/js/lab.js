/*
* Author: Margarita Rodriguez
* Created: 29 November 2021
*
* License: Public Domain
*/

var myUrl = "https://api.kanye.rest/";

$("#activate").click(callAjax);

function callAjax() {
  $.ajax({
    url: myUrl,
    type: "GET",
    success: function(data) {
      console.log("Success: ", data);
      $("#output").append("<p>" + data.quote);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error: ", textStatus, errorThrown);
    }
  })
}
