// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var s = Snap("#svg");



var antenna__stick = s.path("M208,44 L206,90 L218,90 L213,44 Z");
antenna__stick.attr({
	fill: "#A4B7C8",
	stroke: "#000",
	strokeWidth: 1.5
});
var antenna__ball = s.circle(210, 42, 7);
antenna__ball.attr({
	fill: "#D9E3EB",
	stroke: "#000",
	strokeWidth: 1.5
});

var button = s.circle(260, 350, 7);
button.attr({
	fill: "transparent",
	stroke: "#000",
	strokeWidth: 1.5
});
