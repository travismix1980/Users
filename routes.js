const routeHandler = (req, res) => {
    const { method, url } = req;
    const body = [];

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			'<form action="/create-user" method="POST"><input type="text" name="user" placeholder="new user"><input type="submit"></form>'
		);
		return res.end();
    }

    if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Users</title></head>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>User 1</li>');
		res.write('<li>User 2</li>');
		res.write('<li>User 3</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}

    if (url === '/create-user' && method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
};

module.exports = { routeHandler };
