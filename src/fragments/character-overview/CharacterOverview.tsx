import { Grid } from '@mui/joy'
import type { Character } from '../../types/character'
import CharacterEquipmentDisplay from '../character-equipment-display/CharacterEquipmentDisplay'

interface CharacterOverviewProps {
  character: Character
}
export default function CharacterOverview({
  character,
}: CharacterOverviewProps) {
  return (
    <Grid container className="h-full max-h-full">
      <Grid xs={2} className="h-full max-h-full">
        <CharacterEquipmentDisplay wornItems={character.characterWornItems} />
      </Grid>
      <Grid xs={6}></Grid>
    </Grid>
  )
}
