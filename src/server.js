const express = require('express')
const server = express()
const {pageLanding,pageStudy,pageGiveClasses,saveClasses} = require("./pages")

//configuraçao do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//revceber os dados do req.body
.use(express.urlencoded({ extended: true }))
//configuraçao de arquivos estaticos
.use(express.static("public"))
//Rotas da aplicaçao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5700)