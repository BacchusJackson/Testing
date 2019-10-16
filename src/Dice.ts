import { Random, nodeCrypto } from "random-js";

abstract class Dice {
    protected _sides: number = 20;

    roll(times: number = 1) {

        for (let i = 1; i < times; i++) {
            const randomNum = new Random(nodeCrypto).integer(1, this._sides);
        }

    }
}

export default class D20 extends Dice {
    _sides = 20;
}