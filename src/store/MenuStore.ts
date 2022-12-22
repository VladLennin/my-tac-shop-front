import {makeAutoObservable} from "mobx";


export default class MenuStore {
    flag1: boolean = false
    flag2: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    changeFlag1(bool: boolean) {
        this.flag1 = bool;
    }

    changeFlag2(bool: boolean) {
        this.flag2 = bool;
    }

}