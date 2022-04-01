const personBillRouter = require('../routes/peopleBill.router')
const personBillModel = require('../models/personBillModel')

class PersonBillService{
  //Promesas y funciones asincronicas
  //Una funcion asincronica devuelve una promesa
  //Js es un lenguaje ejecuta un hilo -> solo hace una cosa a la vez
  async createpersonBill(personBill){
    personBill.save();
    return personBill;
  }

  async listpersonBill(){
    return personBillModel.find()
  }

  async showpersonBill(personId){
    return personBillModel.findById({ _id: personId })
  }

  async editpersonBill(personId, name, lastname, dni, address = {city, code_zip, geo}){
    return personBillModel.findById({ _id: personId }).then(
      (personFind)=> {if(!personFind)throw Error('No se encontro el usuario');
      return personBillModel.updateOne(
        { personId },
        { name, lastname, dni, address }
      );
    }
    );
  }

  async removepersonBill(personId){
      const personBill_remove = personBillModel.findById({ _id: personId });
      personBillModel.deleteOne(personBill_remove);
      return personBillModel.deleteOne(personBill_remove);
    }

}

module.exports = PersonBillService;