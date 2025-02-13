var app = new Vue ({
    el: "#app", 
    data: {
        tarefa: "",
        listaTarefas:[]
    }, 
    methods: {
        adicionar: function () {
            this.listaTarefas.push(this.tarefa);
            this.tarefa = "";
        },
        limpar: function(){

            this.listaTarefas = [];        

        }
    }
});