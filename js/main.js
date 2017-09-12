fired = false;
var dataset = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39];

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
	console.log('Done');
}