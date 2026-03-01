import { motion } from 'framer-motion'
import CharacterTypeIcon from '../CharacterTypeIcon'
import type { ListCharacter } from '../../types/list-character'

interface CharacterRowProps {
  character: ListCharacter
  index: number
  onCharacterSelected: (characterId: string) => void
}
export default function CharacterRow({
  character,
  index,
  onCharacterSelected,
}: CharacterRowProps) {
  return (
    <motion.tr
      key={character.id}
      className="cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1, // Only for animate
        backgroundColor: { delay: 0, duration: 0.2 }, // No delay for bg color
        opacity: { delay: index * 0.1 }, // Delay for opacity only
        y: { delay: index * 0.1 }, // Delay for y only
      }}
      whileHover={{ backgroundColor: '#55555528' }}
      onClick={() => onCharacterSelected(character.id)}
    >
      <td className="text-center align-middle">
        <CharacterTypeIcon type={character.type} />
      </td>
      <td>{character.name}</td>
      <td className="text-center align-middle">{character.shins}</td>
      <td className="text-center align-middle">{character.tier}</td>
    </motion.tr>
  )
}
