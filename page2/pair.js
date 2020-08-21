$("#Home").click(function(){
	location.replace("../page1/index.html")
})
$("#Asia").click(function(){
    $("#q1,.continen").hide("slow") && $("#Asia").css("background-color", "green");
    $("#step2").show();
    $("#sea").click(function(){
    	$("#step2").hide("slow") && $("#sea").css("background-color", "green");
    	$("#destination1").show("slow");
    })
  });

$("#Asia").click(function(){
	$("#q1,.continen").hide("slow") && $("#Asia").css("background-color", "green");
	$("#step2").show("slow");
	$("#city").click(function(){
		$("#step2").hide("slow") && $("#city").css("background-color", "green");
		$("#destination2").show("slow")
	})
})


$("#Europe").click(function(){
	$("#q1,.continen").hide("slow");
    $("#step2").show("slow") && $("#Europe").css("background-color", "green");
    $("#city").click(function(){
    	$("#step2").hide("slow") && $("#city").css("background-color", "green");
    	$("#destination3").show("slow")
    })
})


$("#Europe").click(function(){
	$("#q1,.continen").hide("slow") && $("#Europe").css("background-color", "green");
    $("#step2").show("slow");
    $("#sea").click(function(){
    	$("#step2").hide("slow") && $("#sea").css("background-color", "green");
    	$("#destination4").show("slow")
    })
})
 
 $("#America").click(function(){
	$("#q1,.continen").hide("slow") && $("#America").css("background-color", "green");
    $("#step2").show("slow");
    $("#sea").click(function(){
    	$("#step2").hide("slow") && $("#sea").css("background-color", "green");
    	$("#destination5").show("slow")
    })
})

 $("#America").click(function(){
	$("#q1,.continen").hide("slow") && $("#America").css("background-color", "green");
    $("#step2").show("slow");
    $("#city").click(function(){
    	$("#step2").hide("slow") && $("#city").css("background-color", "green");
    	$("#destination6").show("slow")
    })
})
