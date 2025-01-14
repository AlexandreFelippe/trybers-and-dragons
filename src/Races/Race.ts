export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  static counterRaces = 0;
  
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.counterRaces += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}