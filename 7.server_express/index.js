const express = require('express');
const phones = require('./phones.json')
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors())
app.get('/',(req,res) =>{
    res.send("Phone data is  loading soooooon!!!")

})

app.get('/phones', (req,res) =>{
res.send(phones);
})

app.get('/phones/:id',(req,res)=>{

    const Id =parseInt(req.params.id);
    console.log(Id);
    const phone = phones.find(phone => phone.id === Id   )
    
    console.log(phone);

    res.send(phone);

})

app.listen(port, ()=> {
    console.log("The phone server is running at post : ", port)
})