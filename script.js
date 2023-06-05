async function screenshot() {
  let URL = document.getElementById("URL").textContent;
  const url = 'https://website-screenshot6.p.rapidapi.com/screenshot?url=' + URL + '&width=1920&height=1080&fullscreen=true';
  const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '8b2e024903mshdcd06b3ed30d0fep1572acjsne83900e5df38',
		  'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
	  }
  };

  try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  } catch (error) {
	  console.error(error);
  }
}

const button = document.getElementById("button1");
button.addEventListener("click", screenshot);

