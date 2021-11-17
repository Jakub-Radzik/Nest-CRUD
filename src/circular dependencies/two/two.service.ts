import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {OneService} from "../one/one.service";

@Injectable()
export class TwoService {

    constructor(
        @Inject(forwardRef(() => OneService))
        private oneService: OneService
    ) {
    }

    twoPrint() {
        console.log('Two ' + 2)
        setTimeout(() => this.oneService.onePrint(), 100)
    }
}
