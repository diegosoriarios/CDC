module.exports = (convert) => {
    //O regex (?=(?:[^"]|"[^"]*")*$) evita que sejam substituido os valores dentro de aspas.
    let code = convert

    console.log(code)

    if (code == null) return ""

    //MÁIN
    code = code.replace(/(UM PROGRAMA CULTURAL)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {')
    //}
    code = code.replace(/(ACABO O PROGRAMA)(?=(?:[^"]|"[^"]*")*$)/g, '}')
    //PRINTF
    code = code.replace(/(RODA O TAKE AI SIMONE[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'printf')
    //SCANF
    code = code.replace(/(VO TE QUE FALA ISSO AQUI[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf')
    //IF
    code = code.replace(/(ACHO QUE NAO IA TER[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {')
    //ELSE
    code = code.replace(/(ACHO ERRADO OTARIO)(?=(?:[^"]|"[^"]*")*$)/g, '} else {')
    //ELSE IF
    code = code.replace(/(VOCE TA ERRADO[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {')
    //WHILE
    code = code.replace(/(VOU TER QUE CONCORDAR COM O PALESTRINHA)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {')
    //FOR
    code = code.replace(/(AQUI TEM INFORMACAO)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {')
    //DECLARAR FUNÇÃO
    code = code.replace(/(VAMOS CHAMAR UM NOVO QUADRO[ \t]*\()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {')
    //RETORNO DE FUNÇÃO
    code = code.replace(/(FALO COM TRANQUILIDADE)(?=(?:[^"]|"[^"]*")*$)/g, 'return')
    //BREAK
    code = code.replace(/(TA CERTA A INDIGNACAO)(?=(?:[^"]|"[^"]*")*$)/g, 'break')
    //CONTINUE
    code = code.replace(/(VOCE FOI INOCENTE AGORA)(?=(?:[^"]|"[^"]*")*$)/g, 'continue')

    //TIPO DE DADOS 
    code = code.replace(/(MEU GUERRERINHO)(?=(?:[^"]|"[^"]*")*$)/g, 'char')
    code = code.replace(/(TOWNER AZUL BEBE)(?=(?:[^"]|"[^"]*")*$)/g, 'int')
    code = code.replace(/(SPRINTER BRANCA)(?=(?:[^"]|"[^"]*")*$)/g, 'short')
    code = code.replace(/(SOPINHA DE ABOBORA)(?=(?:[^"]|"[^"]*")*$)/g, 'long')
    code = code.replace(/(SPRINTER AZUL E VERMELHA)(?=(?:[^"]|"[^"]*")*$)/g, 'double')
    code = code.replace(/(KOMBI BRANCA)(?=(?:[^"]|"[^"]*")*$)/g, 'float')
    code = code.replace(/(AI E PROBLEMA MENTAL TEU)(?=(?:[^"]|"[^"]*")*$)/g, 'unsigned')
    code = code.replace(/(MARVEL OU DC)(?=(?:[^"]|"[^"]*")*$)/g, 'bool')

    //ADICIONA O STDIO
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code

    console.log ('COMPILADO: ')
    console.log (code)

    return code
}