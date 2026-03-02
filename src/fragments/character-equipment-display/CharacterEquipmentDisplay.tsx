import { Box, Chip, Typography } from '@mui/joy'
import type { CharacterWornItem } from '../../types/character'
import BodyOutline from './BodyOutline'

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
          "leftEar HEAD rightEar"
          "NECK NECK NECK"
          "leftArm TORSO rightArm"
          "leftHand legs rightHand"
          "leftBlank legs rightBlank"
          "FEET FEET FEET"
        `,
      }}
    >
      <BodyOutline />
      {wornItems.map(item => <Chip sx={{gridArea: item.equippedAt}}>{item.equippedAt}</Chip>)}
      {/* <Chip sx={{ gridArea: 'head' }}>Head</Chip>
      <Chip sx={{ gridArea: 'leftEar' }}>Left</Chip>
      <Chip sx={{ gridArea: 'torso' }}>Torso</Chip>
      <Chip sx={{ gridArea: 'rightEar' }}>Right</Chip>
      <Chip sx={{ gridArea: 'legs' }}>Legs</Chip> */}
    </Box>

    // <Box
    //   className="h-full relative max-h-full"
    //   sx={{
    //     display: 'grid',
    //     gridTemplateColumns: '30% 42% 30%',
    //     gridTemplateRows: '11% 6% 30% 13% 31% 9%',
    //     gridTemplateAreas: `
    //         "leftEar head rightEar"
    //         "neck neck neck"
    //         "leftArm torso rightArm"
    //         "leftHand legs rightHand"
    //         "blank legs blank"
    //         "feet feet feet"
    //     `,
    //     position: 'relative',
    //   }}
    // >
    //   <BodyOutline />
    //   <Chip sx={{ gridArea: 'head' }}>Head</Chip>
    //   <Chip sx={{ gridArea: 'left' }}>Left</Chip>
    //   <Chip sx={{ gridArea: 'torso' }}>Torso</Chip>
    //   <Chip sx={{ gridArea: 'right' }}>Right</Chip>
    //   <Chip sx={{ gridArea: 'legs' }}>Legs</Chip>
    // </Box>
  )
}
