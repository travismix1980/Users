const routeHandler = (req, res) => {
	const { method, url } = req;
	res.setHeader('Content-Type', 'text/plain');

	if (url === '/') {
		console.log('home route reached');
		res.end('Hello World');
	}

	if (url === '/users') {
		console.log('/users route reached');
		res.end('Hello Users');
	}
};

module.exports = { routeHandler };
