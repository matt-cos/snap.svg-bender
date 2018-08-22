// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var s = Snap("#svg");
// Lets create big circle in the middle:
var button = s.circle(188, 329, 7);
button.attr({
	fill: "transparent",
	stroke: "#000",
	strokeWidth: 1.5
});
