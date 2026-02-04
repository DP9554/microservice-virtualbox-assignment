const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({
    message: "Hello from backend Microservice created by Durgesh Pandey",
    vm: "vm-backend1"
  });
});
app.listen(3000, '0.0.0.0', () => {
  console.log("Backend service created by Durgesh Pandey running on port 3000");
});
