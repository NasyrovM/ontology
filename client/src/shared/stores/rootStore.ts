import {createContext} from "react";

export class RootStore{
    constructor() {
    }
}

export const RootStoreContext = createContext(new RootStore())