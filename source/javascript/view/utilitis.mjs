
import { IndexController } from "../controller/index.controller.mjs";

export class Utilitis{

    static getDiv(){
        return  document.createElement('div');
    }
    static getImage(){
        let imagen = document.createElement('img');
        imagen.addEventListener("click",IndexController.page2)
        return

    }
    static getP(){
        return document.createElement('p')
    }

}