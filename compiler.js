module.exports = (code, stdin, res) => {
    const checkCode = require('./checkCode')
    const convertCode = require('./convert')
    const createFile = require('./createFile')
    const convertedCode = convertCode(code)
    if(checkCode(convertedCode)){
        //console.log(convertedCode)
        /*
        *Se o codigo for valido ele envia o codigo convertido para ser executado
        */
        createFile(convertedCode, stdin, res)
    } else {
        console.log('Error')
        return
    }
}