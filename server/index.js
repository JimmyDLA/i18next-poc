const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use((res, req, next) => {
  console.log(res.method)
  console.log(res.path)
  next()
})

app.use(cors({origin: 'http://localhost:3000'}))

app.use("/locales", express.static('locales'))

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}` )
})