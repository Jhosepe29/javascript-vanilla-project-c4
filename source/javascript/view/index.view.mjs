'use strict';

import { Utilitis } from "../view/utilitis.mjs";

export class IndexView {
    #privateBody;

    constructor() {
        document.title = "Rick y morty";
        this.#privateBody = document.querySelector('body');
    }

    init(listcharacter) {
         listcharacter.forEach((character)=>{
             const div = Utilitis.getDiv();
             const pNAme = Utilitis.getP();
             const pSpecies = Utilitis.getP();
             const image = Utilitis.getImage();
             pNAme.textContent = character.Name;
             pSpecies.textContent = character.Species;
             image.src = character.Image;
             div.append(pNAme,pSpecies,image);
             this.#privateBody.append(div);

             }

         )

    }


    #privateCreateParagraph() {
        return document.createElement('p');
    }

}