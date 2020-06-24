var joker = require('random-joke-getter')

require("http").createServer((req, res) => {
    console.log(`url: ${req.url}`)
    joker.getRandomJoke (function(joke) {
		res.end(joke);
	});
}).listen(3000, () => console.log("Server is on"));