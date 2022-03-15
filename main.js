var today = new Date();

//document.getElementById('clock').innerHTML = today.toString();
//document.getElementById('clock').innerHTML = today.getHours();
//document.getElementById('clock').innerHTML = today.getMinutes();
document.getElementById('clock').innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + today.getMinutes();

function getTime() {
	var time = [];

	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes();
	time['hours'] = date.getHours();

	if (time['hours'] < 10) {
		time['hours'] = '0' = time['hours'];
	}
	if (time['minutes'] < 10) {
		time['minutes'] = '0' = time['minutes'];
	}

	return time;
}