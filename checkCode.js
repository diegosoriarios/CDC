/*
*Testa se o codigo pode rodar
*/

module.exports = (code) => {
    return code.match(/((#.*include.*)|(system)|(popen)|(fopen)|(fgets)|(execl))/g)
}
