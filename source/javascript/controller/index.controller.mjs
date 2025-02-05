"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";



// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class IndexController {

    #privateRickAndMortyURL;
    #privateView;

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#privateView = new IndexView();
    }

    async init() {
        const data = new RickAndMortyService(this.#privateRickAndMortyURL);
        const character = await data.getCharacters();
        console.log(character);
        this.#privateView.init(character);
        }
        page2(index){

        }


}

export const index = new IndexController();
index.init();