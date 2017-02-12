//	Author: Nicholas D'Amico Contact: nickalan82@icloud.com Front End Techdegree Program

//	Checked project in: Chorme 55 64-bit FireFox 50.0 & 49.0.1 Safari 10.0.2

**	Treehouse | Front End Techdegree Project: 11 Site Performance optimization  **

//	View Project 11 here..

//	Instructions
# Performance_Optimization
Apply the skills learned for optimization of
 graphics, HTML, CSS, and JavaScript to take a poorly optimized site
 and reduce the total load size to under 1.3mb and total requests to
 less than 27. Students will need to analyze the assets they've been
 provided to see where optimizations can and need to be made, make
 those optimizations, and measure their success. Multiple analyzation,
 optimization, and measuring cycles may be required.

 //	About
 	* Added Gulp.js to project : Tasks created to handle..
 		- Task for concatination and Minification of all CSS, JS files. All CSS and JS 
 		  files are now (1) file each, this reduced total HTTP requests.
 		- Task for Optimize Image sizes and quality.
 	
 	* Rebuilt Logo.png into a SVG image.
 		- logo.png was 286kb, logo.svg is now 1kb!

 	* Sprite Map created for svg social icons. Reducing the
 	  number of HTTP Requests down to (1) from (3).
