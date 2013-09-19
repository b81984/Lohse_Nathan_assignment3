/*Nathan Lohse
9/19/2013
x-COM: Iron Man*/

alert("JavaScript works!");

var totalShotsFired = 0;
var briefed = false;
var cont = false;
var surviving = "";



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
	console.log("Sir, we're beginning our approach on the UFO");
	var i = 0;
	while(i < squad.length)
	{
		console.log(squad[i].name + "approaches the downed UFO, but doesn't detect any motion.");
		i++;
	}

}

var briefing = function(squad, briefed)
{
	if(briefed != false)
	{
		console.log("Our flyboys have downed our first UFO contact, and we're being sent to the scene to investigate the wreckage.  Your crew for today will include:");
		for(var i = 0; i<squad.length; i++)
		{
			console.log(squad[i].name);
		}
		console.log("Try to bring them all home in one piece.");


	}
	return false;

}
var combat = function(squad)
{

	console.log("Your squad is ambushed by mutons!  Your soldiers fight for their lives!");
	for(var i = squad.length-1; i >= 0 ; i--)
	{ 
		if(squad.length > 3)
		{
			if(squad[i].defense < 30)
			{
				console.log(squad[i].name + " takes a fatal wound!");
				squad.pop(); 
			}
			
		}
		else
		{
			console.log(squad[i].name + " successfully downs an X-Ray, good shot!");
		}
	}
	return squad;

}
var survivors = function(squad)
{
	var survivorList = "";
	for(var i = 0; i < squad.length; i++)
	{
		survivorList = survivorList + squad[i].name + "\n";
	}

	return survivorList;

}
var inside = function(name)
{
	console.log("Inside the ship, there's a new type of enemy; an Outsider!  Your troops try to stun it to bring it home alive!");

}






var squad = loadRangers(json);
var aliens = loadAliens(json);
briefed = confirm("Do you require briefing?");
briefed = briefing(squad, briefed);
approach();
squad = combat(squad);
while(cont != true)
{
	cont = confirm("OK to go on, cancel to check who's still with us");
	if(cont != true)
	{
		surviving = survivors(squad);
		console.log(surviving);
	}
}


