const express = require("express")
const app = express()
const path = require("path")
require("./config/config")
const PORT  =  process.env.PORT
const cvApi = require("./src/routes/routes")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.get("/", (req, res) => {
   res.render("index")
})

app.use("/", cvApi)

app.listen(PORT, console.log(`app running on port ${PORT}`))
