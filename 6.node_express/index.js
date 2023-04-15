const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("This is my first server")
})

app.get('/data', (req,res)=>{
    res.send("this is the data server....coming soon!!!")

})
app.listen(port, () =>{
    console.log("The server is open at port ", port);
})