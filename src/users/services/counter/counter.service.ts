import {Injectable, Scope} from '@nestjs/common';

@Injectable()
// @Injectable({scope: Scope.REQUEST})
@Injectable({scope: Scope.TRANSIENT})
export class CounterService {

    private count: number = 0;

    constructor() {
    }

    increment(){
        this.count++;
    }

    show(){
        console.log(this.count)
    }
}
