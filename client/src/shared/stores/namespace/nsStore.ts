import {RootStore} from "../rootStore";
import {action, observable, reaction} from "mobx";
import {IDataSource} from "../../data/IDataSource";
import {MemDataSource} from "../../data/memDataSource";

export class NsStore
{
    rootStore: RootStore
    dataSource : IDataSource

    constructor(rootStore : RootStore) {
        this.rootStore = rootStore
        this.dataSource = new MemDataSource()
        reaction(
            () => {},
            ()=>{}
        )
    }

    @observable nsUnitMap = new Map();
    @observable nsFuncMap = new Map();
    @observable nsRelMap = new Map();
    @observable loading = false

    @action loadNs = async () => {
        this.loading = true;
    }
};