document.getElementById('botao-cadastrar').addEventListener('click', function(event) {
    event.preventDefault();
    var inputNome = document.getElementById('input-nome').value;
    var inputEmail = document.getElementById('input-email').value;
    var inputCelular = document.getElementById('input-celular').value;
    var inputCheckbox = document.getElementById('check-politica');
    
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var celularRegex = /^[0-9]+$/;
    var valido = true;
    
    /* VALIDAÇÃO DO NOME */
    if (inputNome == "") {
        document.getElementById('mensagem-erro-nome').classList.remove('esconder');
        document.getElementById('input-nome').classList.remove('input-cadastro');
        document.getElementById('input-nome').classList.add('borda-erro');
        valido = false;
    } else {
        document.getElementById('mensagem-erro-nome').classList.add('esconder');
        document.getElementById('input-nome').classList.remove('borda-erro');
        document.getElementById('input-nome').classList.add('input-cadastro');
    }

    /* VALIDAÇÃO DO EMAIL */
    if (emailRegex.test(inputEmail)) {
        document.getElementById('mensagem-erro-email').classList.add('esconder');
        document.getElementById('input-email').classList.remove('borda-erro');
        document.getElementById('input-email').classList.add('input-cadastro');
    } else {
        document.getElementById('mensagem-erro-email').classList.remove('esconder');
        document.getElementById('input-email').classList.remove('input-cadastro');
        document.getElementById('input-email').classList.add('borda-erro');
        valido = false;
    }

    /* VALIDAÇÃO DO CELULAR */
    if (celularRegex.test(inputCelular)) {
        document.getElementById('mensagem-erro-celular').classList.add('esconder');
        document.getElementById('input-celular').classList.remove('borda-erro');
        document.getElementById('input-celular').classList.add('input-cadastro');
    } else {
        document.getElementById('mensagem-erro-celular').classList.remove('esconder');
        document.getElementById('input-celular').classList.remove('input-cadastro');
        document.getElementById('input-celular').classList.add('borda-erro');
        valido = false;
    }

    /* VALIDAÇÃO DO CHECKBOX */
    if (inputCheckbox.checked) {
        document.getElementById('mensagem-erro-politica').classList.add('esconder');
    } else {
        document.getElementById('mensagem-erro-politica').classList.remove('esconder');
        valido = false;
    }

    /* ENVIA SE TUDO CORRETO */
    if (valido) {
        document.getElementById('formulario').submit();
    }
});

/* IMPEDE O USUÁRIO DE DIGITAR LETRAS */
document.getElementById('input-celular').addEventListener('keypress', function (e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});

/* ABRE O MENU MOBILE */
document.getElementById('icone-menu').addEventListener('click', function(){
    document.getElementById('icone-close').classList.remove('esconder-icone')
    document.getElementById('icone-close').classList.add('mostrar-icone')
    document.getElementById('icone-menu').classList.remove('mostrar-icone')
    document.getElementById('icone-menu').classList.add('esconder-icone')
    document.getElementById('container-mobile').classList.add('ativo')
});

/* FECHA O MENU MOBILE */
document.getElementById('icone-close').addEventListener('click', function(){
    document.getElementById('icone-menu').classList.remove('esconder-icone')
    document.getElementById('icone-menu').classList.add('mostrar-icone')
    document.getElementById('icone-close').classList.remove('mostrar-icone')
    document.getElementById('icone-close').classList.add('esconder-icone')
    document.getElementById('container-mobile').classList.remove('ativo')
})