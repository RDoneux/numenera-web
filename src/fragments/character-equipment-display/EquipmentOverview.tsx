import { Box, Typography } from '@mui/joy'
import type { CharacterWornItem } from '../../types/character'
import { ItemTypeIconMap } from '../../types/item'

interface EquipmentOverviewParams {
  item: CharacterWornItem
}
export default function EquipmentOverview({ item }: EquipmentOverviewParams) {
  return (
    <Box
      alignContent="center"
      justifyItems="center"
      sx={{ gridArea: item.equippedAt }}
    >
      <Typography textAlign="center">{item.name}</Typography>
      <Typography textAlign="center">
        <i className={`ra ${ItemTypeIconMap[item.itemType]}`}></i>
      </Typography>
    </Box>
  )
}
