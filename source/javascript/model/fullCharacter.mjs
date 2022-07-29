'use strict';

export class FullCharacter {
    #name;
    #created;
    #gender;
    #species;
    #image;
    #status;
    #urlprefil;


    constructor(name, created, gender, species, image, status, urlperfil) {
        this.#name = name;
        this.#species = species;
        this.#image = image;
        this.#created = created;
        this.#gender = gender;
        this.#urlprefil = urlperfil;
        this.#status = status;

    }

    get Name() {
        return this.#name;
    }

    set Name(value) {
        this.#name = value;
    }

    get Created() {
        return this.#created;
    }

    set Created(value) {
        this.#created = value;
    }

    get Gender() {
        return this.#gender;
    }

    set Gender(value) {
        this.#gender = value;
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

    set image(value) {
        this.#image = value;
    }

    get Status() {
        return this.#status;
    }

    set Status(value) {
        this.#status = value;
    }

    get Urlperfil() {
        return this.#urlprefil;
    }

    set Urlperfil(value) {
        this.#urlprefil = value;
    }
}