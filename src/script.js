function enviar() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;

    const mensagem =
`Olá! Gostaria de entrar em contato!

Nome: ${nome}
E-mail: ${email}
WhatsApp: ${whatsapp}`;

    const mensagemFormatada = encodeURIComponent(mensagem);

    const numero = "5541998950360";

    const link = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagemFormatada}`;

    window.open(link, "_blank");
}