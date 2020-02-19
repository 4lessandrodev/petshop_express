const PetModel = require('../models/Pet');
const PetController = {

  index: (req, res) => {
    res.send(PetModel.listarPets());
  },

  add: (req, res) => {
    let novoPet = req.params;
    PetModel.adicionarPet(novoPet);
    res.send(JSON.stringify(req.params));
  },
  show: (req, res) => {
    res.send('Mostrar pet');
  }

};

module.exports = PetController;