import type { ListCharacter } from "./list-character";

export interface Character extends ListCharacter {
    characterFocus: CharacterFocus
    characterType: CharacterType
    characterDescriptor: CharacterDescriptor

}

export interface CharacterFocus {
    name: string;
    description: string;
    connection: string;
}

export interface CharacterType {
    name: string;
    description: string;
}

export interface CharacterDescriptor {
    name: string;
    description: string;
}