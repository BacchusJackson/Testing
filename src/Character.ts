export default class Character {
    private _tempHp: number = 0;
    private _currentHp: number = 0;
    public constructor(private _name:string, private _hpCap:number) {
        this._currentHp = _hpCap;
    }

    set name(value:string) {
        this._name = value;
    }

    get name(): string {
        return this._name;
    }

    get hpCap(): number  {
        return this._hpCap;
    }

    get currentHp(): number {
        return this._hpCap + this._tempHp;
    }

    get trueCurrentHp(): number {
        return this.currentHp;
    }





}