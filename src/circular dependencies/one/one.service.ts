import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {TwoService} from "../two/two.service";

@Injectable()
export class OneService {

    constructor(
        @Inject(forwardRef(() => TwoService))
        private twoService: TwoService
    ) {
        // this.onePrint();
    }

    onePrint() {
        console.log("One " + 1)
        setTimeout(() => this.twoService.twoPrint(), 100)
    }
}
