
$(document).ready(function(){
    $(".desplegableHeader").click(function(){
        if($("#listaHeader").css("display").toLowerCase()=="none"){
            $("#listaHeader").show("slide", {direction: "up"}, "250");
            $(".desplegableHeader input").attr("src", "css/times-solid.svg");
            $(".descripcionPeliPortadaReproducir").hide();
            event.preventDefault();
        }

        else{
            $("#listaHeader").hide("slide", {direction: "up"}, "250");
            $(".descripcionPeliPortadaReproducir").show();
            $(".desplegableHeader input").attr("src", "css/align-justify-solid.svg");
        }
    });
});
    

$(document).ready(function(){
    $("#lupa").click(function(){
        if($("#inputBuscarPeliHeader").css("display").toLowerCase()=="none"){
            $("#inputBuscarPeliHeader").show("slide", {direction: "right"}, "250");
            $("#lupa img").attr("src", "css/times-solid.svg");
            event.preventDefault();
        }

        else{
            $("#inputBuscarPeliHeader").hide("slide", {direction: "right"}, "250");
            $("#lupa img").attr("src", "css/search-solid.svg");
            event.preventDefault();
        }
      });
  });




