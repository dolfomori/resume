const express = require('express')
const app = express()
const path = require('path')

const port = 3001

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>
    res.render('home')
)

app.listen(port, (err) => {
    
    if (err) console.log(`Erro ${err}`)
    else console.log(`Server running at door ${port}`)
})