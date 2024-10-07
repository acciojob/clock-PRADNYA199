//your JS code here. If required.
let timeDisplay=document.getElementById("timer")
lat currentTime=new Date();
setInterval(
	function(){
		currentTime=new Date();
		timeDisplay.innerHTML=currentTime.ToLocalString();
		
		
	},10000
)