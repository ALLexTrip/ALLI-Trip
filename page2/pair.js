$("#Home").click(function(){
	location.replace("../page1/index.html")
})
var hotel = '';
$("#Asia").click(function(){
    $("#q1").hide("slow") && $("#Asia").css("background-color", "green");
    $("#step2").show();
    $("#sea").click(function(){
    	$("#step2").hide("slow") && $("#sea").css("background-color", "green");
    	$("#destination1").show("slow");
        $("asiaCity1").click(function(){
            location.replace("../page3/page.html")
            hotel = "Phong Nha Farmastay"
        })
        $("#asiaSea2").click(function(){
            location.replace("../page3/page.html")
            hotel = "Phong Nha Farmastay"
        })

    })
  });

$("#Asia").click(function(){
	$("#q1").hide("slow") && $("#Asia").css("background-color", "green");
	$("#step2").show("slow");
	$("#city").click(function(){
		$("#step2").hide("slow") && $("#city").css("background-color", "green");
		$("#destination2").show("slow")
        $("#asiaCity1").click(function(){
            localStorage.setItem("hotel", "Suncourt Hotel Yatri");
            location.replace("../page3/page.html")
            hotel = "Suncourt Hotel Yatri"
        })
         $("#asiaCity2").click(function(){
            localStorage.setItem("hotel", "Metropol moscow");
            location.replace("../page3/page.html")
            hotel = "Metropol moscow"
        })
	})
})


$("#Europe").click(function(){
	$("#q1").hide("slow");
    $("#step2").show("slow") && $("#Europe").css("background-color", "green");
    $("#city").click(function(){
    	$("#step2").hide("slow") && $("#city").css("background-color", "green");
    	$("#destination3").show("slow")
        $("#europeCity1").click(function(){
            localStorage.setItem("hotel", "Intel Hotels Amesterdam zaandam");
            location.replace("../page3/page.html")
            hotel = "Intel Hotels Amesterdam zaandam"
        })
        $("#europeCity2").click(function(){
            localStorage.setItem("hotel", "Hilton molino stucky");
            location.replace("../page3/page.html")
            hotel = "Hilton molino stucky"
        })
    })
})


$("#Europe").click(function(){
	$("#q1").hide("slow") && $("#Europe").css("background-color", "green");
    $("#step2").show("slow");
    $("#sea").click(function(){
    	$("#step2").hide("slow") && $("#sea").css("background-color", "green");
    	$("#destination4").show("slow")
        $("#europeSea1").click(function(){
            location.replace("../page3/page.html")
            hotel = "ibiza Rocks hotel"
        })
        $("#europeSea2").click(function(){
            location.replace("../page3/page.html")
            hotel = "tahiti village"
        })
    })
})
 
 $("#America").click(function(){
	$("#q1").hide("slow") && $("#America").css("background-color", "green");
    $("#step2").show("slow");
    $("#sea").click(function(){
    	$("#step2").hide("slow") && $("#sea").css("background-color", "green");
    	$("#destination5").show("slow")
        $("#americaSea1").click(function(){
            location.replace("../page3/page.html")
            hotel = "the florida hotel"
        })
        $("#americaSea2").click(function(){
            location.replace("../page3/page.html")
            hotel = "Portobay"
        })
    })
})

 $("#America").click(function(){
	$("#q1").hide("slow") && $("#America").css("background-color", "green");
    $("#step2").show("slow");
    $("#city").click(function(){
    	$("#step2").hide("slow") && $("#city").css("background-color", "green");
    	$("#destination6").show("slow")
         $("#americaCity1").click(function(){
            location.replace("../page3/page.html")
            hotel = "bellagio"
        })
          $("#americaCity2").click(function(){
            location.replace("../page3/page.html")
            hotel = "omni dallas"
        })
    })
})
