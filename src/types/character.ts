import type { ListCharacter } from './list-character'
import type { EquipLocation, ItemType } from './item'

export interface Character extends ListCharacter {
  characterFocus: CharacterFocus
  characterType: CharacterType
  characterDescriptor: CharacterDescriptor
  characterWornItems: CharacterWornItem[]
  characterPool: CharacterPool
}

export interface CharacterFocus {
  name: string
  description: string
  connection: string
}

export interface CharacterType {
  name: string
  description: string
}

export interface CharacterDescriptor {
  name: string
  description: string
}

export interface CharacterWornItem {
  id: string;
  name: string;
  itemType: ItemType
  description: string;
  weight: number;
  price: number;
  equippedAt: EquipLocation
  quanty: number
  equipLocations: EquipLocation[]
}

export interface CharacterPool {
  mightCurrent: number;
  mightMax: number;
  mightEdge: number;
  mightManualModifier: number;
  mightEdgeManualModifier: number;

  speedCurrent: number;
  speedMax: number;
  speedEdge: number;
  speedManualModifier: number;
  speedEdgeManualModifier: number;

  intellectCurrent: number;
  intellectMax: number;
  intellectEdge: number;
  intellectManualModifier: number;
  intellectEdgeManualModifier: number;

  armour: number;
  armourManualModifier: number;
  
  effort: number;
}