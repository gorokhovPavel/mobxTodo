import {makeAutoObservable} from "mobx";

class Counter {
    timer = 0
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    increment(){
        this.count = this.count+1
    }

    decrement(){
        this.count = this.count-1
    }

    get total() {
        return 'count + total = ' + this.count + this.timer
    }
}

export default new Counter()
