import {RootStore} from "../rootStore";
import { reaction } from "mobx";

export class NsStore
{
    private rootStore: RootStore;
    constructor(rootStore : RootStore) {
        this.rootStore = RootStore;

        reaction(
            () => {},
            ()=>{}
        );
    }
}