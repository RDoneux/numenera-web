export interface ListCharacter {
    name: string;
    type: CharacterType
    shins: number;
    tier: number
}

export type CharacterType = "Nano" | "Jack" | "Glaive";
