import type { ListCharacter } from './list-character'
import type { EquipLocation, ItemType } from './item'

export interface Character extends ListCharacter {
  characterFocus: CharacterFocus
  characterType: CharacterType
  characterDescriptor: CharacterDescriptor
  characterWornItems: CharacterWornItem[]
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