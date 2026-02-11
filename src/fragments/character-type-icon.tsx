const characterTypeIcons = {
  Nano: <i className="ra ra-aware" />,
  Jack: <i className="ra ra-fireball-sword" />,
  Glaive: <i className="ra ra-crossed-axes" />,
} as const;
type CharacterType = "Nano" | "Jack" | "Glaive";

interface CharacterTypeIconProps {
  type: CharacterType;
}
export default function CharacterTypeIcon({ type }: CharacterTypeIconProps) {
  return characterTypeIcons[type];
}
