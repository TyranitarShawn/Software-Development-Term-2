data = [["Alabama", 60, 50],
["Alaska", 20, 28],
["American Samoa", 11, 9],
["Arizona", 85, 58],
["Arkansas", 37, 40],
["California", 548, 172],
["Colorado", 78, 37],
["Connecticut", 71, 28],
["Delaware", 31, 16],
["Democrats Abroad", 17, 0],
["District of Columbia", 46, 19],
["Florida", 246, 99],
["Georgia", 117, 76],
["Guam", 12, 9],
["Hawaii", 35, 19],
["Idaho", 27, 32],
["Illinois", 182, 69],
["Indiana", 92, 57],
["Iowa", 52, 30],
["Kansas", 37, 40],
["Kentucky", 60, 45],
["Louisiana", 59, 46],
["Maine", 30, 23],
["Maryland", 118, 38],
["Massachusetts", 116, 42],
["Michigan", 147, 59],
["Minnesota", 93, 38],
["Mississippi", 41, 39],
["Missouri", 84, 52],
["Montana", 27, 27],
["Nebraska", 30, 36],
["Nevada", 43, 30],
["New Hampshire", 32, 23],
["New Jersey", 142, 51],
["New Mexico", 43, 24],
["New York", 291, 95],
["North Carolina", 121, 72],
["North Dakota", 23, 28],
["Northern Marianas", 11, 9],
["Ohio", 160, 66],
["Oklahoma", 42, 43],
["Oregon", 74, 28],
["Pennsylvania", 210, 71],
["Puerto Rico", 67, 23],
["Rhode Island", 33, 19],
["South Carolina", 59, 50],
["South Dakota", 25, 29],
["Tennessee", 75, 58],
["Texas", 251, 155],
["Unassigned", 1, 0],
["Utah", 37, 40],
["Vermont", 26, 16],
["Virgin Islands", 12, 9],
["Virginia", 109, 49],
["Washington", 118, 44],
["West Virginia", 37, 34],
["Wisconsin", 96, 42],
["Wyoming", 18, 29]]

occurred = ["Iowa","New Hampshire","Nevada","South Carolina","Alabama","Arkansas","Colorado","Georgia","Massachusetts","Minnesota","Oklahoma","Tennessee","Texas","Vermont","Virginia","American Samoa","Kansas","Louisiana","Nebraska","Maine","Michigan","Mississippi","Northern Marianas","Florida","Illinois","Missouri","North Carolina","Ohio"]

if (localStorage.getItem("toggleParty") == null){
	var toggleParty = 1;
}
else{
	var toggleParty = localStorage.getItem("toggleParty");
}
var x = d3.scale.linear()
    .domain([0,58])
    .range([0,100]);

var setup = d3.select(".chart")
    .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return (x(d[parseInt(toggleParty)])  + "px"); })
    .style("background-color", function(d) {
	if(occurred.indexOf(d[0]) != -1){
	    return "cyan";
	}else{
	    return "blue";
	}
    })
    .style("color", function(d) {
	if(occurred.indexOf(d[0]) != -1){
	    return "black";
	}else{
	    return "lightsteelblue";
	}
    })
    .style("margin","1px")
    .style("padding","1px")
    .text(function(d) { return d[0] + ": "+ d[parseInt(toggleParty)]; });

document.getElementById("clickMe").onclick = function() {
	if (toggleParty == "1"){
		toggleParty = "2";
	}
	else{
		toggleParty = "1";
	}
    setup.transition()
    .style("width", function(d) { return (x(d[parseInt(toggleParty)]) + "px"); })
    .style("background-color", function(d) {
	console.log(setup.style(background-color).text());
	if(setup.attr("background-color") == "red" || setup.attr("background-color") == "pink"){
	    if(occurred.indexOf(d[0]) != -1){
		return "cyan";
	    }else{
		return "blue";
	    }
	}else{
	    if(occurred.indexOf(d[0]) != -1){
		return "pink";
	    }else{
		return "red";
	    }
	}
    })
    .style("color", function(d) {
	if(occurred.indexOf(d[0]) != -1){
	    return "black";
	}else{
	    return "lightsteelblue";
	}
    })
    .text(function(d) { return d[0] + ": "+ d[parseInt(toggleParty)]; })
    .duration(1000)
    .delay(100);
}
