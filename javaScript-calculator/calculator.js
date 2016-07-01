var main = function(){
  $('button').click(function(){
    var x = $(this).text();
    var valTela = document.getElementById("tela").value;
    var val = valTela.concat(x);
    document.getElementById("tela").value = val;

    var aux = [];
    aux.push(val);

    var inpt = aux.toString();
    var res = [];

    $('.equal').click(function(){
      var total;
      if(inpt.indexOf("%")!=-1){ // ex: [100+10%]
        res = inpt.split("%").map(Number);
        total = res.reduce(function(a,b){
          return (a * b)/100;
        });

      }else if(inpt.indexOf("+")!=-1){
        res = inpt.split("+").map(Number);
        total = res.reduce(function(a,b){
          return a + b;
        });
      }else if(inpt.indexOf("-")!=-1){
        res = inpt.split("-").map(Number);
        total = res.reduce(function(a,b){
          return a - b;
        });
      }else if(inpt.indexOf("x")!=-1){
        res = inpt.split("x").map(Number);
        total = res.reduce(function(a,b){
          return a * b;
        });
      }else if(inpt.indexOf("÷")!=-1){
        res = inpt.split("÷").map(Number);
        total = res.reduce(function(a,b){
          return a / b;
        });
      }else{
        total = val;
      }

      document.getElementById("tela").value = total;
    });

    switch(x){
      case "CE":
      document.getElementById("tela").value = "";
      break;
      case "C":
      var out = valTela.substring(0,(valTela.length - 1));
      document.getElementById("tela").value = out;
      break;
    }

  });//end click handler

}
$(document).ready(main);
