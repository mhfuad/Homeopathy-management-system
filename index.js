const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

require("./routes/auth.route")(app);
require("./routes/user.route")(app);
require("./routes/patient.route")(app);

app.listen(port,()=>{
  console.log(`Project started on ${port}`)
})