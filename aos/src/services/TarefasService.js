class TarefasService {
    constructor() {
      this.tarefa = [];
    }
  
    getAllTarefa() {
      return this.tarefa;
    }
  
    addTarefa(novaTarefa) {
      this.tarefa.push(novaTarefa);
    }
  }
  
  export default new TarefasService;
  