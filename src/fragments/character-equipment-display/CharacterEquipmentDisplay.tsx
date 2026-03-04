import { Box } from '@mui/joy'
import type { CharacterWornItem } from '../../types/character'
import BodyOutline from './BodyOutline'
import EquipmentOverview from './EquipmentOverview'

interface CharacterEquipmentDisplayProps {
  wornItems: CharacterWornItem[]
}
export default function CharacterEquipmentDisplay({
  wornItems,
}: CharacterEquipmentDisplayProps) {
  return (
    <Box
      className="h-full relative max-h-full"
      sx={{
        display: 'grid',
        gridTemplateColumns: '30% 42% 30%',
        gridTemplateRows: '11% 6% 30% 13% 31% 9%',
        gridTemplateAreas: `
          "LEFT_EAR HEAD RIGHT_EAR"
          "NECK NECK NECK"
          "LEFT_ARM TORSO RIGHT_ARM"
          "RIGHT_HAND LEGS LEFT_HAND"
          "leftBlank LEGS rightBlank"
          "FEET FEET FEET"
        `,
      }}
    >
      <BodyOutline />
      {wornItems.map((item: CharacterWornItem) => (
        <EquipmentOverview item={item} />
      ))}
    </Box>
  )
}
