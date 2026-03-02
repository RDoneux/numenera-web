export const ItemType = {
    WEAPON: "Weapon",
    WEAPON_SLOT: "Weapon Slot",
    ARMOUR: "Armour",
    ARMOUR_SLOT: "Armour Slot",
    CYPHER: "Cypher",
    CYPHER_SLOT: "Cypher Slot",
    ARTIFACT: "Artifact",
    EQUIPMENT: "Equipment",
    ODDITY: "Oddity",
    ODDITY_SLOT: "Oddity Slot",
    AMMUNITION: "Ammunition"
} as const;
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export const EquipLocation = {
    HEAD: "Head",
    EYES: "Eyes",
    EARS: "Ears",
    NECK: "Neck",
    TORSO: "Torso",
    LEGS: "Legs",
    HANDS: "Hands",
    FINGERS: "Fingers",
    FOREARMS: "Forearms",
    FEET: "Feet",
    NONE: "None"
}
export type EquipLocation = (typeof EquipLocation)[keyof typeof EquipLocation];