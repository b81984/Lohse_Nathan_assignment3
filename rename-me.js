/*Nathan Lohse
9/19/2013
x-COM: Iron Man*/

alert("JavaScript works!");

var totalShotsFired = 0;



var loadRangers = function(json) // returns array of squad members
{
	var rangerSquad = new Array();
	for(var i = 0; i < json.jaxRangers.length; i++)
	{
		rangerSquad[i] = json.jaxRangers[i];
	}
	return rangerSquad;
}
var loadAliens = function(json) // returns array of aliens
{
	var alienSquad = new Array();
	for(var i = 0; i < json.aliens.length; i++)
	{
		alienSquad[i] = json.aliens[i];
	}
}

var approach = function() // while loop, squad approaching the UFO
{
	var i = 0;
	while(i < squad.length)
	{
		console.log(rangerSquad[i].name + "approaches the downed UFO, but doesn't detect any motion.");
		i++;
	}

}

var briefing = function(squad)
{

}
var combat = function()
{

}
var attack = function()
{

}
var shotsFired = function(bullets) 
{

}
var loadSquad = function(json, key, squad) //Returns Array, takes String argument and array argument
{
	console.log(json);
	//for(var i = 0, i < )

}

var kill = function(name)
{

}




var squad = loadRangers(json);
var aliens = loadAliens(json);