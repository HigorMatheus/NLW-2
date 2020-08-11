//servidor
const express =require("express")
const server = express()
const { pageGiveClasses, pagelanding, pageStudy, saveClasses} = require('./pages')


// comfigurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//receber od dados do req.body
server.use(express.urlencoded({ extended: true}))
//configurar arquivos estáticos (css,scripts,imagens)
server.use(express.static("public"))

// rotas da arplicacao 
server.get("/", pagelanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.post("/save-classes", saveClasses)
server.listen(5500)