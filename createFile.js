module.exports = (text, stdin, res) => {
    const run = require('./runCode.js')
    const code = require('./convert.js')(text)
    const fs = require('fs')

    //Nome do arquivo
    var rName = 'teste'
  
    //Cria um novo aruivo txt contendo o codigo
    fs.writeFile(rName + ".txt", stdin, (error) => {
        //Se estiver um erro printa o codigo e retorna um objeto com mensagem de erro e com resposta vazia
        if (error) {
            console.log(error)
            res.end(JSON.stringify({error: "SÓ ERRO BOBO\n",stdout: null}))
        }
        
        //Se não tiver erro nenhum cria um arquivo .c
        fs.writeFile(rName + ".c", code, (err) => {
            //Se estiver um erro printa o codigo e retorna um objeto com mensagem de erro e com resposta vazia
            if (err) {
                console.log(err)
                res.end(JSON.stringify({error: "SÓ ERRO BOBO\n",stdout: null}))
                return
            }
            //Se não tiver erro chama o arquivo runCode
            process.nextTick(() => {
                run(rName, res)
            })
        })
    })
}