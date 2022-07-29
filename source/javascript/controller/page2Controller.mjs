"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";



// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class Page2Controller{
    #privateRickAndMortyURL;
    #privateView;

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#privateView = new IndexView();
    }

}