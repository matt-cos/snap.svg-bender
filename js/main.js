var s = Snap("#svg");

var head = s.path("M175,238 L171,135 Q170,96 210,91 Q250,82 259,125 L260,205 L210,205 Q196,205 190,215 Q180,242 248,232 L248,226 Q255,225 254,242 Q205,255 175,238 Z");
head.attr({
	fill: "#A4B7C8",
	// fill: "transparent",
	stroke: "#000",
	// stroke: "red",
	strokeWidth: 1.5
});

var mouth = s.path("M248,205 L210,205 Q196,205 190,215 Q180,242 248,232 Z");
mouth.attr({
	fill: "#F6F2D3",
	stroke: "#000",
	strokeWidth: 1.5
});

var antenna__base = s.ellipse(212, 90, 14, 6);
antenna__base.attr({
	fill: "#D9E3EB",
	stroke: "#000",
	strokeWidth: 1.5
});
antenna__base.transform( 'r-3' );

var antenna__stick = s.path("M208,44 L206,85 Q212,89 217,84 L213,44 Z");
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


// var button = s.circle(260, 350, 7);
// button.attr({
// 	fill: "transparent",
// 	stroke: "#000",
// 	strokeWidth: 1.5
// });
