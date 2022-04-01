const SuperheroRoute = require('../routes/superhero_v2.router')
const SuperheroModel = require('../models/superhero_v2.model')

class SuperheroService{

  async createSuperhero(superheroV2){
    superheroV2.save();
    return superheroV2;
  }

  async listSuperhero(){
    return SuperheroModel.find()
  }

  async showSuperhero(superheroId){
    return SuperheroModel.findById({ _id: superheroId })
  }

  async editSuperhero(superheroId, superhero, realname, superpower){
    return SuperheroModel.findById({ _id: superheroId }).then(
      (superheroFind)=> {if(!superheroFind)throw Error('No se encontro el superheroe');
      return SuperheroModel.updateOne(
        { superheroId },
        { superhero, realname, superpower }
      );
    }
    );
  }

  async removeSuperhero(superheroId){
      const superhero_remove = SuperheroModel.findById({ _id: superheroId });
      SuperheroModel.deleteOne(superhero_remove);
      return SuperheroModel.deleteOne(superhero_remove);
    }

}

module.exports = SuperheroService;