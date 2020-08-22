$("#buttonDest").click(function(){
	location.replace("../page2/pair.html")
})



var change =[
"./pics/sea.jpg",
"./pics/big9.jpg",
"./pics/slide.jpg",
"./pics/balloon.jpg",
"./pics/Mountain.jpg",
"./pics/lune.jpg",
"./pics/seaView.jpg",
"./pics/tropic.jpg",
"./pics/ldm.jpg",
"./pics/quiz.jpg",
"./pics/view.jpg",
"./pics/eiffel.jpg"
]
var img=$("#img2")
$("#img2").attr("src" ,change[0]);
var randome =function(){
	var i =0;
	i=Math.floor(Math.random()*change.length)
    img.attr("src", change[i]);
    console.log(i);
    }
setInterval(function(){
	randome()
},2800)
