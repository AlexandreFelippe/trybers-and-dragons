import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  static archetypeInstances: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    Archetype.archetypeInstances += 1;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;

  static createdarchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}