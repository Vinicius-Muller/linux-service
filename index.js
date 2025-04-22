const https = require("https");
const options = {
 hostname: "jsonplaceholder.typicode.com",
 path: "/posts",
 method: "GET"
}
const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    try {
      const jsonData = JSON.parse(data);
      console.log(jsonData);
    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  });
});
req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});
req.end();


const welcome = (name) => `Welcome to the app ${name}`;