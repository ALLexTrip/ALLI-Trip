$("#buttonDest").click(function(){
	location.replace("../page2/pair.html")
})



var change =[
"./pics/titanic.jpg",
"./pics/big9.jpg",
"./pics/slide.jpg"]
var img=$("#img")
$("#img").attr("src" ,change[0]);
var randome =function(){
	var i =0;
	i=Math.floor(Math.random()*change.length)
    img.attr("src", change[i]);
    console.log(i);
    }
setInterval(function(){
	randome()
},2000)
