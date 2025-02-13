$(document).ready(()=> { //()=> é uma outra forma de escrever function
    $("#btnCarregar").click(()=> {
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/users",
            method: "GET",
            contentType: "text/plain",
            complete: (res) => {
                let lista = JSON.parse(res.responseText);
                $.each(lista, (index, item)=> {
                    $("#conteudo").append(`<tr><td>${item.id}</td><td>${item.name}</td></tr>`);
                });
            }
        });
    });
});