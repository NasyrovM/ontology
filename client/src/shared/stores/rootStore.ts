import {createContext} from "react";
import {NsStore} from "./namespace/nsStore";

export class RootStore{
    nsStore : NsStore;

    constructor() {
        this.nsStore = new NsStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore())