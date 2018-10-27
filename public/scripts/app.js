const button = document.getElementById('button');

let options = {
	enableHighAccuracy: true,
	timeout: 15000,
	maximumAge: 0
};

function showPosition(position) {
	let crd = position.coords;
	let coordinates = {
		latitude: crd.latitude,
		longitude: crd.longitude
	};
	console.log(`Latitude : ${crd.latitude}`);
	console.log(`Longitude: ${crd.longitude}`);

	const oReq = new XMLHttpRequest();
	oReq.addEventListener('load', () => {
		console.log('loading');
	});
	oReq.addEventListener('error', event => {
		console.log('ERROR', event);
	});
	oReq.open('POST', '');
	oReq.setRequestHeader('Content-type', 'application/json');
	oReq.send(JSON.stringify(coordinates));
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

button.addEventListener('click', () => {
	navigator.geolocation.getCurrentPosition(showPosition, error, options);
});