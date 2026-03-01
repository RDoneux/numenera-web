export interface ListCharacter {
  id: string
  name: string
  type: CharacterType
  shins: number
  tier: number
}

export type CharacterType = 'Nano' | 'Jack' | 'Glaive'
