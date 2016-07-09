$(document).ready(function(){
  $("button").on("click", function(){
    $(this).replaceWith("<input type='text' class='article-search'><button type='button'><i class='fa fa-times close' aria-hidden='true'></i></button>");
  });

})
