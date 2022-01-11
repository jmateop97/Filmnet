
$(document).ready(function(){
    $(".desplegableHeader").click(function(){
        if($("#listaHeader").css("display").toLowerCase()=="none"){
            $("#listaHeader").show();
            $(".desplegableHeader input").attr("src", "css/times-solid.svg");
            event.preventDefault();
        }

        else{
            $("#listaHeader").hide();
            $(".desplegableHeader input").attr("src", "css/align-justify-solid.svg");
        }
    });
});
    

$(document).ready(function(){
    $("#lupa").click(function(){
        if($("#inputBuscarPeliHeader").css("display").toLowerCase()=="none"){
            $("#inputBuscarPeliHeader").show();
            $("#lupa img").attr("src", "css/times-solid.svg");
            event.preventDefault();
        }

        else{

            $("#inputBuscarPeliHeader").hide();
            $("#lupa img").attr("src", "css/search-solid.svg");
            event.preventDefault();
        }
      });
  });




