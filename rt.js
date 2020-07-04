var start;

function getRandomColor() 
{
	var letters = '0123456789ABCDEF';
	var color = '#';
  	for (var i = 0; i < 6; i++)  
  	{
  		color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

function makeShapeAppear()
{
	var left = Math.random()*600;
	var top  = Math.random()*400;
	var size = Math.random()*200+20;
	start = new Date().getTime();
	document.getElementById("shape").style.backgroundColor = getRandomColor();
	document.getElementById("shape").style.display = "block";
	document.getElementById("shape").style.left = left+"px";
	document.getElementById("shape").style.top = top+"px";
	document.getElementById("shape").style.height = size+"px";
	document.getElementById("shape").style.width = size+"px"
	if (Math.random()>.5) 
	{
		document.getElementById("shape").style.borderRadius = '50%';
	}
	else
	{
		document.getElementById("shape").style.borderRadius = 0;
	}
}

function delayAppearing()
{
	window.setTimeout(makeShapeAppear,Math.floor(Math.random() *2000)+100 );
}

delayAppearing();

document.getElementById("shape").onclick = function()
{
	document.getElementById("shape").style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start)/1000;
	document.getElementById("time").innerHTML = timeTaken;
	delayAppearing();
}
