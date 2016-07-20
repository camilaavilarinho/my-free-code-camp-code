function change(){
  $(".search").toggleClass("close");
  if ($('.search').hasClass('close')) {
    $(".input").show();
    $(".input").val("");
    $(".title").empty();
    $(".description").empty();
  }else{
    $(".input").hide();
    $(".title").hide();
    $(".description").hide();
  }
}
$(".input").hide();
$("button").on("click", change);

//working with angular
var app = angular.module('wikiapp', []);

app.controller('wikicontroller', function($scope){
  var url = "";
  $scope.data = [];
  $scope.search = function($event, str){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
      url = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+str+"&format=json&callback=?";

      $.getJSON(url, function(json) {
        $scope.$apply(function(){
            $scope.data = json;
        });
      });
    }
  }
});
