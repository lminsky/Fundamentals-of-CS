var temp = 0;
var weather;
var url = "http://api.openweathermap.org/data/2.5/weather?zip=11201,us&units=imperial&appid=58e73235683c159e77de158225616621";
var params = {};
var lastUpdate;

function preload() {
  weather = loadJSON(url);
}

function setup() {
	createCanvas(300, 520);
	background(255);
	drawWeather();
}

function draw() {
	if(timeSince(lastUpdate) > 60) {
		getWeather();
	}
}

function timeSince(then) {
	var now = new Date();
	var dif = now.getTime() - then.getTime();
	return dif/1000;
}

function getWeather() {
	loadJSON(url, drawWeather);
}

function drawWeather() {
	lastUpdate = new Date();
	temp = weather.main.temp;
	var ampm = " AM";
	if(lastUpdate.getHours() >= 12)
		ampm = " PM";
	if(lastUpdate.getHours()%12 == 0)
		console.log("At 12:" + lastUpdate.getMinutes() + ":" + lastUpdate.getSeconds() + ampm + " is was " + temp + "° F");
	else
		console.log("At " + (lastUpdate.getHours()%12) + ":" + lastUpdate.getMinutes() + ":" + lastUpdate.getSeconds() + ampm + " is was " + temp + "° F");

	background(255);

	//Temp
	fill(204, 0, 0);
	noStroke();
	var output = map(temp, 0, 100, 0, -240);
	rect(width/2 - 50, 343, 100, output);

	//Graphic
	strokeWeight(10);
	stroke(0);
	noFill();
	arc(width/2, 100, 100, 100, PI, TWO_PI);
	fill(204, 0, 0);
	noStroke();
	rect(width/2 - 50, 343, 100, 60);
	stroke(0);
	arc(width/2, 400, 150, 150, -1*PI/4, 5*PI/4);
	line(width/2 + 50, 100, width/2 + 50, 343);
	line(width/2 - 50, 100, width/2 - 50, 343);


	//Marks
	strokeWeight(3);
	var numDashes = 11;
	textSize(14);
	for (var i = numDashes - 1; i >= 0; i--) {
	var scale = 343 - (i * 24);
	stroke(0);
	line(width/2 - 50, scale, width/2 - 35, scale);
	fill(0);
	noStroke();
	text(i * 10 + "°", width/2 - 30, scale + 5);
	}
}