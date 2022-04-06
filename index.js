const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

require("./routes/auth.route")(app);
require("./routes/user.route")(app);
require("./routes/patient.route")(app);

app.listen(port,()=>{
  console.log(`Project started on ${port}`)
})