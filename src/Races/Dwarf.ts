import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _counterRaces = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf._counterRaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._counterRaces;
  }
}