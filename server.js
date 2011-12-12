var server = require('router').create();
var bark = require('bark');

var port = parseInt(process.argv[2] || 8080, 10);

server.get('/', bark.file('./index.html'));
server.get('/css/*', bark.file('./css/{*}'));
server.get('/js/*', bark.file('./js/{*}'));
server.get('/audio/*', bark.file('./audio/{*}'));

server.listen(port);
console.log('server running on port', port);