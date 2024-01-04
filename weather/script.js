
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8a5894c22mshf321637e5a94e8ep1645dajsn599a9fe6ba51',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	 fetch(url, options).then((res)=>{
res.json().then((result)=>{
console.log(result);
})
	 })
	
} catch (error) {
	console.error(error);
}
