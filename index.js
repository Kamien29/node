import express from "express"
const app = express()
const port = 3005

app.get('/', (req, res)) => {
    res.send('hello world')

}
app.listen(port,()=>{
    console.log('http://localhost:${port} on port ${port}');
});