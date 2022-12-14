const express = require ('express');
const path = require ('path');
const app = express();
//Unificamos rutas

const publicPath = path.resolve(__dirname,'./public')
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'/public')));

app.listen(process.env.PORT || 6000,()=>{
    console.log("Servidor corriendo")
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/views/home.html');
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname +'/views/register.html');
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname +'/views/login.html');
})