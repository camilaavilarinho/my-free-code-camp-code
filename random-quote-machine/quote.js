$('#quoteID').click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
  .done(update)
  .fail(handleErr);
});

function update(response) {
  var res = JSON.stringify(response);
  var jobject = JSON.parse(res);
  $('#response').html(jobject.quoteText);
  $('#response').append('<p>'+ jobject.quoteAuthor+ '</p>');
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

// twitter script
function getSelectedText () {
  if (window.getSelection) {
    var range = window.getSelection ();
    return range.toString()
  }
  else {
    if (document.selection.createRange) {
      var range = document.selection.createRange ();
      return range.text
    }
  }
}

function createTweetLink (text, e) {

  var oldTweetLink = document.getElementById("tweetLink");
  if (oldTweetLink != null && typeof oldTweetLink != "undefined"){
    oldTweetLink.parentNode.removeChild(oldTweetLink);
  }

  if (text === "")
  return undefined;
  var newTweetLink = document.createElement("a");
  newTweetLink.href = "http://twitter.com/home?status=" + escape(text);
  newTweetLink.id = "tweetLink";
  newTweetLink.innerHTML = "Tweet";
  var appendedTweetLink = document.getElementById("response").appendChild(newTweetLink);
  $(appendedTweetLink).css({"top": e.pageY - 40, "left": e.pageX + 10});
  return newTweetLink;
}

var textParagraph = document.getElementById("response");
textParagraph.addEventListener("mouseup", function(e){
  tweetLink = createTweetLink(getSelectedText(), e);
}, false);
