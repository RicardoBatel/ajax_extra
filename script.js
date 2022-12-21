$(document).ready(() => {

    $('button').on('click', e => {
        e.preventDefault()

        let dados = $('form').serialize()
        //console.log(dados)

        //lógica de requisição
        $.ajax({
            type: 'GET',
            url: 'app.php',
            data: dados,
            dataType: 'json',
            success: dados => {console.log(dados)},
            error: erro => {console.log(erro)}
        })
    })
})