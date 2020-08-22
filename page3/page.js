$("#Home").click(function(){
	location.replace("../page1/index.html")
})

var hotel =  localStorage.getItem("hotel");
if(hotel === null) location.replace("../page1/index.html")
var makeHotel = function(name,roomPrice){

	return {
		name:name,
		roomPrice:roomPrice,
		calculate:function(nbr,days,roomType,accomodation){
			
			var total = 0;
			if(roomType==='Simple'){
				if(accomodation==='Bed&Breakfast'){
					total=this.roomPrice*nbr*days;
				}
				else if(accomodation==='HalfBoard'){
					total=this.roomPrice*parseInt(nbr)*parseInt(days)+60;
				}
				else if(accomodation==='FullBoard'){
					total=this.roomPrice*nbr*days+100;
			}

			}
			else if(roomType==='Superior'){
				var price = this.roomPrice+this.roomPrice * 30 / 100;
				if(accomodation==='Bed&Breakfast'){
						total=price*nbr*days;
					}
					else if(accomodation==='HalfBoard'){
						total=price*nbr*days+60;
					}
					else if(accomodation==='FullBoard'){
						total=price*nbr*days+100;
				}	
			}
		 	else if(roomType==='Suit'){
		 		var price = this.roomPrice+this.roomPrice * 60 / 100;
		 		if(accomodation==='Bed&Breakfast'){
						total=price*nbr*days;
					}
					else if(accomodation==='HalfBoard'){
						total=price*nbr*days+60;
					}
					else if(accomodation==='FullBoard'){
						total=price*nbr*days+100;
				}
	 		}
	 		return total


	}
}}
//asia sea //  
var vietnam = makeHotel("Phong Nha Farmastay",131)
var malaysia = makeHotel("Legoland Malysia Resort",294)
//asia city//
var newdelhi = makeHotel("Suncourt Hotel Yatri",80)
var moscow = makeHotel("Metropol moscow",592)
//europe city//
var amesterdam = makeHotel("Intel Hotels Amesterdam zaandam",239)
var venice = makeHotel("Hilton molino stucky",559)
//europe sea//
var ibiza = makeHotel("ibiza Rocks hotel",182)
var tahiti = makeHotel("tahiti village",461)
//america sea//
var florida = makeHotel("the florida hotel",312)
var rio = makeHotel("Portobay",288)
//america city//
var lasvegas= makeHotel("bellagio",624)
var texas = makeHotel("omni dallas",733)

var array = [vietnam,malaysia,newdelhi,moscow,amesterdam,venice,ibiza,tahiti,florida,rio,lasvegas,texas]

var arrayOfHotel = array.filter(function(element){
	return element.name === hotel
})

$(document).ready(function() {
$("#calculate").click(function(){

	var number = $("#nbp").val()
	var roomType = $("#type-room").val()
	var days = $("#days").val()
	var accomodation = $("#accomodation").val()
	var result = arrayOfHotel[0].calculate(number,days,roomType,accomodation)
	$("#result").html(`<span id="cu">${result}  DT  </span>`);
	$("#result").append("<button id = 'currency' class='button'> Currency </button>")
	$("#currency").click(function(){
		var currencyCalc = Math.round(result / 2.73) + ' $'
		$("#result").append(` <span id="cuu">   `+currencyCalc+`</span>`)

	})
})







})