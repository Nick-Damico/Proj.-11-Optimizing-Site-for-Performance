//	Author: Nicholas D'Amico Contact: nickalan82@icloud.com Front End Techdegree Program

//	Checked project in: Chorme 55 64-bit FireFox 50.0 & 49.0.1 Safari 10.0.2

**	Treehouse | Front End Techdegree Project: 11 Site Performance optimization  **

//	View Project 11 here..
https://nick-damico.github.io/Proj.-11-Optimizing-Site-for-Performance/.

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
 		- Task for image optimization using gulp-image.
 	
 	* Rebuilt Logo.png into a SVG image.
 		- logo.png was 286kb, logo.svg is now 1kb!

 	* Sprite Map created for svg social icons. Reducing the
 	  number of HTTP Requests down to (1) from (3).

 	* Thumbnail images used for img-grid preview. Full size photos only load on js event 'click'.

 	* Reports From Optimization monitoring Tools

.-----------------------------------------------------------------------------------------------------------.
| Report from 5 run(s) for <http://localhost:8080/> using phantomas v1.18.0                                 |
|-----------------------------------------------------------------------------------------------------------|
|             Metric             |     min      |     max      |   average    |    median    |    stddev    |
|--------------------------------|--------------|--------------|--------------|--------------|--------------|
| requests                       |           26 |           26 |           26 |           26 |            0 |
| gzipRequests                   |            5 |            5 |            5 |            5 |            0 |
| postRequests                   |            0 |            0 |            0 |            0 |            0 |
| httpsRequests                  |            5 |            5 |            5 |            5 |            0 |
| notFound                       |            0 |            0 |            0 |            0 |            0 |
| bodySize [bytes]               |      1156627 |      1177656 |    1162649.2 |      1158762 |      7676.77 |
| contentLength [bytes]          |      1156627 |      1177656 |    1162649.2 |      1158762 |      7676.77 |
| httpTrafficCompleted [ms]      |         1710 |         4823 |       3090.8 |         2551 |      1270.24 |
| timeToFirstByte [ms]           |            7 |           30 |         12.2 |            7 |         8.98 |
| timeToLastByte [ms]            |           27 |           45 |         32.4 |           31 |          6.5 |
| requestsWithTimeout            |            0 |            0 |            0 |            0 |            0 |
'-----------------------------------------------------------------------------------------------------------'

	* Report from Google Chrome Dev Tools.
.-----------------------------------------------------------------------------------------------------.
|	* Report from Google Chrome Dev Tools.	v.56 64bit					                              |
|																									  |
|	22 requests  |  1.1MB transferred  |  Finish: 287ms  |  DOMContentLoad: 396ms |  Load: 463ms	  |				
|																									  |
'-----------------------------------------------------------------------------------------------------'
	


