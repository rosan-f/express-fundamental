import express from 'express'
import path from "path"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "page", "index.html"))
})

app.get('/barang/:id', (req, res) => {
    const id = req.params.id
    const kategori = req.query.kategori

    res.json({
        id: id,
        nama: "barang",
        harga: 200,
        kategori : kategori
    })
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "page", "about.html"))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "page", "contact.html"))
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "page", "404.html"))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} `)
})