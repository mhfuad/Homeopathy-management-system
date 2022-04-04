const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})



require("./routes/user.route")(app);

app.listen(port,()=>{
  console.log(`Project started on ${port}`)
})