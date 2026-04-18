const form = document.getElementById("formCadastro");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;

    if (nome == "") {
        alert("Preencha o nome!");
    } else {
        alert("Tudo certin :)");
    }

});