const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.get('/detail.html',(req,res) => {
    res.sendFile(path.join(__dirname,'/detail.html'))
})

app.get('/cate.html',(req,res) => {
    res.sendFile(path.join(__dirname,'/cate.html'))
})


// 设置托管静态资源
app.use('/assets', express.static(path.join(__dirname, 'assets')))


app.listen(4100, () => {
    console.log('at port 4100 ');
})