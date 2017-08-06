var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var pump = require("pump");

var js_files = [
	"bower_components/jquery/dist/jquery.js",
	"bower_components/isotope/dist/isotope.pkgd.js",
	"bower_components/infinite-scroll/dist/infinite-scroll.pkgd.js",
	"public_html/js/script.js"
];

gulp.task("concatJS",function(cb){
	return gulp.src(js_files)
		.pipe(concat("bower.js"))
		.pipe(gulp.dest("public_html/js/"));
});

gulp.task("watchJS",["concatJS"],function(){
	gulp.watch("public_html/js/script.js",["concatJS"]);
});

gulp.task("default",function(){
	console.log("\nExecute this script with a task name: [concatJS, watchJS]\nExample Usage: gulp concatJS\n");
});