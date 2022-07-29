import { CharacterModel } from "../character.model.mjs";

export class RickAndMortyService {
    #privateUrl;

    constructor(url) {
        this.#privateUrl = url;
    }
    async getCharacters(){
        const rickMortyData = await this.#getData();
        const arrayCharacters = [];
        console.log(rickMortyData);
        rickMortyData.results.forEach((character)=>{

            arrayCharacters.push(new CharacterModel(character.name,character.species,character.image));

        });
        return arrayCharacters;

    }

    async #getData() {
        return fetch(`${this.#privateUrl}/character`).then(response => response.json());
    }

}