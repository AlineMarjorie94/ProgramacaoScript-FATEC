class Instrumento {
    constructor(nome, tipo, marca, modelo, ano){
        this.nome = nome;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
var app = new Vue ({
    el: '#app',
    data:{
        nome: '',
        tipo: '',
        tipos: ['Acessórios','Corda', 'Eletrônico', 'Percussão', 'Sopro', 'Teclas'], //Array com os tipos de instrumentos
        marca: '',
        modelo: '',
        ano: '',  
        listaInstrumentos:[],
        posição: -1
    },

    methods: {
        verificarCampos: function() {
            return (this.nome != '' && this.tipo != '' && this.marca != '' && this.modelo != '' && this.ano != '');
        }, 
        salvar: function(){
            let novoInstrumento = new Instrumento(this.nome, this.tipo, this.marca, this.modelo, this.ano);
            if(this.posição == -1){
                this.listaInstrumentos.push(novoInstrumento);
            }else {
                Vue.set(this.listaInstrumentos, this.posição, novoInstrumento);
            }
             
            this.nome = '';
            this.tipo = '';
            this.marca = '';
            this.modelo = '';
            this.ano = '';
            this.posição = -1;
        },
        alterar: function(index){
            if (confirm('Deseja editar este instrumento?')) {
                this.nome = this.listaInstrumentos[index].nome;
                this.tipo = this.listaInstrumentos[index].tipo;
                this.marca = this.listaInstrumentos[index].marca;
                this.modelo = this.listaInstrumentos[index].modelo;
                this.ano = this.listaInstrumentos[index].ano;
                this.posição = index;  
            }         
            },
        excluir: function(index){
                if (confirm('Deseja Excluir?')){
                    this.listaInstrumentos.splice(index, 1);
                }
             }        
        }        
});