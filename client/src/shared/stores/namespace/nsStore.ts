import {RootStore} from "../rootStore";
import {action, observable, reaction} from "mobx";

export class NsStore
{
    rootStore: RootStore;

    constructor(rootStore : RootStore) {
        this.rootStore = rootStore;

        reaction(
            () => {},
            ()=>{}
        );
    }

    @observable nsUnitMap = new Map();
    @observable nsFuncMap = new Map();
    @observable nsRelMap = new Map();
    @observable loading = false;

    @action loadNs = async () => {
        this.loading = true;

    }
}