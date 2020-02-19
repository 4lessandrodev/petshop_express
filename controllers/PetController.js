const PetController = {

  index: (req, res) => {
    res.send('Pagina inicial');
  },

  add: (req, res) => {
    res.send('Adicionar pet');
  },
  show: (req, res) => {
    res.send('Mostrar pet');
  }

};

module.exports = PetController;