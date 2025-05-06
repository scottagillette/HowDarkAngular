import { SingleDie } from '../dice/SingleDie';

const D20: SingleDie = {
  roll: () => Math.floor(Math.random() * 20) + 1
};

export class Stats {

  private readonly strength: number;
  private currentStrength: number;

  private readonly dexterity: number;
  private currentDexterity: number;

  private readonly constitution: number;
  private currentConstitution: number;

  private readonly intelligence: number;
  private currentIntelligence: number;

  private readonly wisdom: number;
  private currentWisdom: number;

  private readonly charisma: number;
  private currentCharisma: number;

  constructor(strength: number, dexterity: number, constitution: number, intelligence: number, wisdom: number, charisma: number) {
    this.strength = this.currentStrength = strength;
    this.dexterity = this.currentDexterity = dexterity;
    this.constitution = this.currentConstitution = constitution;
    this.intelligence = this.currentIntelligence = intelligence;
    this.wisdom = this.currentWisdom = wisdom;
    this.charisma = this.currentCharisma = charisma;
  }

  private getModifier(attribute: number): number {
    if (attribute <= 3) return -4;
    if (attribute <= 5) return -3;
    if (attribute <= 7) return -2;
    if (attribute <= 9) return -1;
    if (attribute <= 11) return 0;
    if (attribute <= 13) return 1;
    if (attribute <= 15) return 2;
    if (attribute <= 17) return 3;
    if (attribute <= 30) return 4;
    return 0;
  }

  getStrength(): number {
    return this.strength;
  }

  getCurrentStrength(): number {
    return this.currentStrength;
  }

  getStrengthModifier(): number {
    return this.getModifier(this.currentStrength);
  }

  strengthSave(difficultyCheck: number): boolean {
    return D20.roll() + this.getModifier(this.currentStrength) >= difficultyCheck;
  }

  strengthSaveValue(): number {
    return D20.roll() + this.getModifier(this.currentStrength);
  }

  strengthDrain(die: SingleDie): number {
    this.currentStrength = Math.max(0, this.currentStrength - die.roll());
    return this.currentStrength;
  }

  getDexterity(): number {
    return this.dexterity;
  }

  getCurrentDexterity(): number {
    return this.currentDexterity;
  }

  getDexterityModifier(): number {
    return this.getModifier(this.currentDexterity);
  }

  dexteritySave(difficultyCheck: number): boolean {
    return D20.roll() + this.getModifier(this.currentDexterity) >= difficultyCheck;
  }

  dexteritySaveValue(): number {
    return D20.roll() + this.getModifier(this.currentDexterity);
  }

  getConstitution(): number {
    return this.constitution;
  }

  getCurrentConstitution(): number {
    return this.currentConstitution;
  }

  getConstitutionModifier(): number {
    return this.getModifier(this.currentConstitution);
  }

  constitutionSave(difficultyCheck: number): boolean {
    return D20.roll() + this.getModifier(this.currentConstitution) >= difficultyCheck;
  }

  constitutionSaveValue(): number {
    return D20.roll() + this.getModifier(this.currentConstitution);
  }

  constitutionDrain(die: SingleDie): number {
    this.currentConstitution = Math.max(0, this.currentConstitution - die.roll());
    return this.currentConstitution;
  }

  getIntelligence(): number {
    return this.intelligence;
  }

  getCurrentIntelligence(): number {
    return this.currentIntelligence;
  }

  getIntelligenceModifier(): number {
    return this.getModifier(this.currentIntelligence);
  }

  intelligenceSave(difficultyCheck: number): boolean {
    return D20.roll() + this.getModifier(this.currentIntelligence) >= difficultyCheck;
  }

  intelligenceSaveValue(): number {
    return D20.roll() + this.getModifier(this.currentIntelligence);
  }

  getWisdom(): number {
    return this.wisdom;
  }

  getCurrentWisdom(): number {
    return this.currentWisdom;
  }

  getWisdomModifier(): number {
    return this.getModifier(this.currentWisdom);
  }

  wisdomSave(difficultyCheck: number): boolean {
    return D20.roll() + this.getModifier(this.currentWisdom) >= difficultyCheck;
  }

  wisdomSaveValue(): number {
    return D20.roll() + this.getModifier(this.currentWisdom);
  }

  getCharisma(): number {
    return this.charisma;
  }

  getCurrentCharisma(): number {
    return this.currentCharisma;
  }

  getCharismaModifier(): number {
    return this.getModifier(this.currentCharisma);
  }

  charismaSave(difficultyCheck: number): boolean {
    return D20.roll() + this.getModifier(this.currentCharisma) >= difficultyCheck;
  }

  charismaSaveValue(): number {
    return D20.roll() + this.getModifier(this.currentCharisma);
  }
}
