function change(){
  $(".search").toggleClass("close");
  if ($('.search').hasClass('close')) {
    $(".input").show();
    $(".input").val("");
  }else{
    $(".input").hide();
  }
}
$(".input").hide();
$("button").on("click", change);

//handle keypress event
/*var value = ""
$(".input").keypress(function(e){
  value = $(".input").val();
  if(e.keyCode == 13){
    search(value);
  }
});
function search(val){
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+val+"&limit=10&namespace=0&format=jsonfm";
  alert(url);
} */

//working with angular
var app = angular.module('wikiapp', []);

app.controller('wikicontroller', function($scope, $http){
  var url = "";
  $scope.data = [];
  $scope.search = function($event, str){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
      /*url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+str+"&limit=10&namespace=0&format=json";*/
      url = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+str+"&format=json&callback=?"
      alert(url);
      /*$http.get(url).then(function(response){
        this.data = response.data;
      });*/
    }
  }

  $.getJSON(url, function(json) {
    $scope.data = json;
    alert(json);
  });

});
