const axios = require('axios');

axios.get('http://192.168.56.2:3000/api/hello')
  .then(res => console.log(res.data))
  .catch(err => console.error(err.message));
