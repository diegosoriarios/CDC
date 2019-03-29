module.exports = (file, res) => {
    const exec = require('child_process').exec

    /*
    *Roda esse comando no terminal
    *gcc teste.c -o teste -lm && ./teste < teste.txt
    */
    exec(`gcc ${file}.c -o ${file} -lm && ./${file} < ${file}.txt`, (error, stdout, stderr) => {
        //Se estiver um erro printa o codigo e retorna um objeto com mensagem de erro e com resposta vazia
        if (error) {
            console.log(error)
            res.end(JSON.stringify({error: "SÓ ERRO BOBO\n",stdout: null}))
        } else {
            /*
            *Se não tiver erro printa a saída na tela
            *E retorna um objeto sem erro e a saída
            */
            console.log ("SÓ PROGRAMA TOP: " + stdout)
            res.end(JSON.stringify({error: null, stdout: stdout}))
        }
    })
    /*
    *Quando terminar de rodar o código ele apaga os arquivos gerados
    */
    .on('close', () => {
        exec(`rm ${file}*`, (error, stdout, stderr) => {
            console.log("Removengo arquivos")
        })
    })
}