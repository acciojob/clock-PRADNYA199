//your JS code here. If required.
let timeDisplay=document.getElementById("timer")
let currentTime=new Date();
setInterval(
	function(){
		currentTime=new Date();
		timeDisplay.innerHTML=currentTime.ToLocalString();
		
		
	},1000
)