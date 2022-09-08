const express = require('express');
const routing = require('./routes/routes');
require('./config/db-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public/uploads/images', express.static(__dirname + '/public/uploads/images'))

app.get("/", (req,res)=>{
    res.send("Le monde chico et tout ce qu'il ya dedans")
})

app.use(routing);

console.log(new Date())

app.listen(3000, ()=> console.log(`Listening on port 3000`));