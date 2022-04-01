const SuperheroRouter = require('../routes/superheroes.router')
const SuperheroModel = require('../models/superheroModel')

class SuperheroService{
  //Promesas y funciones asincronicas
  //Una funcion asincronica devuelve una promesa
  //Js es un lenguaje ejecuta un hilo -> solo hace una cosa a la vez
  async createSuperhero(superhero){
    superhero.save();
    return superhero;
  }

  async listSuperhero(){
    return SuperheroModel.find()
  }

  async showSuperhero(){
    return SuperheroModel.findById({ _id: superheroId })
  }

  async editSuperhero(superheroId, realname, feature = {universe, super_powers}, superhero_sidekick = {sidekick, side_powers}){
    return SuperheroModel.findById({ _id: superheroId }).then(
      (superheroFind)=> {if(!superheroFind)throw Error('No se encontro el superheroe');
      return SuperheroModel.updateOne(
        { superheroId },
        { realname, feature, superhero_sidekick }
      );
    }
    );
  }

  async removeSuperhero(){
      const superhero_remove = SuperheroModel.findById({ _id: superheroId });
      SuperheroModel.deleteOne(superhero_remove);
      return SuperheroModel.deleteOne(superhero_remove);
    }
}

module.exports = SuperheroService;
