class Livro {
    constructor(titulo, autor, editora, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano = ano;
    }
}
var app = new Vue ({
    el: '#app',
    data:{
        titulo: '',
        autor: '',
        editora: '',
        ano: '', 
        listaLivros:[],
        hora: '00:00:00',
        posicao: -1
    },
    methods: {
        verificarCampos: function() {
            return (this.titulo != '' && this.autor != '' && this.editora != '' && this.ano != '');
        }, 
        salvar: function(){
            let novoLivro = new Livro(this.titulo, this.autor, this.editora, this.ano);
            if (this.posicao == -1){
                this.listaLivros.push(novoLivro);
            } else {
                Vue.set(this.listaLivros, this.posicao, novoLivro);
            }
             
            this.titulo = '';
            this.autor = '';
            this.editora = '';
            this.ano = '';
            this.posicao = -1;
        },
        carregarHora: function(){
            axios.get('http://date.jsontest.com/').then (res => (this.hora = res.data.time));
        }, 
        alterar: function(index){
            this.titulo = this.listaLivros[index].titulo;
            this.autor = this.listaLivros[index].autor;
            this.editora = this.listaLivros[index].editora;
            this.ano = this.listaLivros[index].ano;
            this.posicao = index;
        },
        excluir: function(index){
            if (confirm('Deseja Excluir?')){
                this.listaLivros.splice(index, 1);
            }
        }
    }   
});
