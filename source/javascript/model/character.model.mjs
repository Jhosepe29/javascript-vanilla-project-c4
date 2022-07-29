'use strict';

export class CharacterModel {
    #name;
    #species;
    #image;


    constructor(name,species,image) {
        this.#name = name;
        this.#species = species;
        this.#image = image;

    }


    get Name() {
        return this.#name;
    }

    set Name(value) {
        this.#name= value;
    }

    get Species() {
        return this.#species;
    }

    set Species(value) {
        this.#species = value;
    }

    get Image() {
        return this.#image;
    }

    set Image(value) {
        this.#image = value;
    }




    toString() {
        return `${this.#name} ${this.#species} ${this.#image} `;
    }
}