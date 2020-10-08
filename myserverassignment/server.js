const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write(
            '<head><style>html {background-color: rgb(75, 75, 75);}</style></head>'
        );
        res.write('<body>');
        res.write('<h1>Root route hellooos</h1>');
        res.write('<form action="/users" method="POST">');
        res.write("<input type='text' name='username' />");
        res.write("<input type='submit' />");
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users' && method === 'POST') {
        const user = [];
        req.on('data', chunk => {
            user.push(chunk);
        });
        return req.on('end', () => {
            const usersList = Buffer.concat(user).toString();
            res.write('<html>');
            res.write(`<ul><li>${usersList}</li></ul>`);
            res.write('</html>');
            console.log(req);
            return res.end();
        });
    }
    res.write('<h1>hi</h1>');
    return res.end();
});

console.log(`Server running on 127.0.0.1:${port}`);

server.listen(port, '127.0.0.1');
