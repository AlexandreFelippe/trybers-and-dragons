import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _counterMage = 0;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._counterMage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._counterMage;
  }
}