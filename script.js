// Função para criptografar o texto
function criptografar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let textoCriptografado = texto.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
    document.getElementById("output").innerText = textoCriptografado;
    document.querySelector('.output-area p').style.display = 'none';
}

// Função para descriptografar o texto
function descriptografar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let textoDescriptografado = texto.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");
    document.getElementById("output").innerText = textoDescriptografado;
    document.querySelector('.output-area p').style.display = 'none';
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    let texto = document.getElementById("output").value; 
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado com sucesso!");
    }, function(err) {
        alert("Erro ao copiar o texto: ", err);
    });
}