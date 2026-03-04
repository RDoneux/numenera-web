export const ItemType = {
    WEAPON: "WEAPON",
    WEAPON_SLOT: "WEAPON_SLOT",
    ARMOUR: "ARMOUR",
    ARMOUR_SLOT: "ARMOUR_SLOT",
    CYPHER: "CYPHER",
    CYPHER_SLOT: "CYPHER_SLOT",
    ARTIFACT: "ARTIFACT",
    EQUIPMENT: "EQUIPMENT",
    ODDITY: "ODDITY",
    ODDITY_SLOT: "ODDITY_SLOT",
    AMMUNITION: "AMMUNITION"
} as const;
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export const ItemTypeIconMap = {
    [ItemType.WEAPON]: "ra-crossed-swords",
    [ItemType.WEAPON_SLOT]: "ra-slot",
    [ItemType.ARMOUR]: "ra-shield",
    [ItemType.ARMOUR_SLOT]: "ra-slot",
    [ItemType.CYPHER]: "ra-crystal-ball",
    [ItemType.CYPHER_SLOT]: "ra-slot",
    [ItemType.ARTIFACT]: "ra-gear",
    [ItemType.EQUIPMENT]: "ra-backpack",
    [ItemType.ODDITY]: "ra-question-mark",
    [ItemType.ODDITY_SLOT]: "ra-slot",
    [ItemType.AMMUNITION]: "ra-bullet"
}

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