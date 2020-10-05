const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<h1>Root route hellooos</h1>');
        res.write('<form action="/users" method="POST">');
        res.write("<input type='text' name='username'");
        res.write('</form>');
        res.write("<input type='submit' name='submit-button' />");
        res.write('</html>');
        return res.end();
    }

    if (url === '/users' && method === 'POST') {
        const user = [];
        req.on('data', chunk => {
            user.push(chunk);
        });

        res.write('<html>');
        res.write(`<ul><li>${user}</li></ul>`);
        res.write('</html>');
        console.log(req);
        return res.end();
    }
    res.write('<h1>hi</h1>');
    res.end();
});

console.log(`Server running on 127.0.0.1:${port}`);

server.listen(port, '127.0.0.1');
