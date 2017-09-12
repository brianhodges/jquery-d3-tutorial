fired = false;
var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];

d3.select("body").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", function(d) {
		return d * 5 + "px";
	})
	.on("mouseover", function() {
		d3.select(this).style("background-color", "red");
		countSelected();
	});

function countSelected() {
	cnt = 0;
	$('.bar').each(function(i, obj) {
		if ($(obj).css('background-color').indexOf("128") >= 0)
			cnt++;
	});
	if (cnt === 0 && !fired)
		complete();
}

function complete() {
	fired = !fired;
	alert('Done');
}