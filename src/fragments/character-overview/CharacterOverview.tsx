import { Box, Divider, Stack, Typography } from '@mui/joy'
import type { Character } from '../../types/character'
import CharacterEquipmentDisplay from '../character-equipment-display/CharacterEquipmentDisplay'

interface CharacterOverviewProps {
  character: Character
}
export default function CharacterOverview({
  character,
}: CharacterOverviewProps) {
  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr"
      height="100%"
      gap={2}
      className="h-full max-h-full"
    >
      <Box
        paddingX={2}
        paddingY={1}
        borderRadius={5}
        className="background-contrast"
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            display="inline"
            level="h2"
            fontSize={24}
            textAlign="center"
          >
            {character.name}
          </Typography>
          <Box
            display="flex"
            alignContent="center"
            justifyContent="center"
            gap={1}
          >
            <Typography display="inline" fontSize={20}>
              <span className="inline-flex gap-1 items-baseline content-center">
                <i className="ra ra-muscle-up"></i>
                {character.characterPool.mightCurrent}
              </span>
            </Typography>
            <Divider orientation="vertical" />
            <Typography display="inline" fontSize={20}>
              <span className="inline-flex gap-1 items-baseline content-center">
                <i className="ra ra-player-dodge"></i>
                {character.characterPool.speedCurrent}
              </span>
            </Typography>
            <Divider orientation="vertical" />
            <Typography display="inline" fontSize={20}>
              <span className="inline-flex gap-1 items-baseline content-center">
                <i className="ra ra-aura"></i>
                {character.characterPool.intellectCurrent}
              </span>
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          minWidth: 200,
          maxWidth: 300,
          minHeight: 400,
          maxHeight: 500,
          alignSelf: 'center',
        }}
        className="h-full max-h-full"
      >
        <CharacterEquipmentDisplay wornItems={character.characterWornItems} />
      </Box>
    </Box>
  )
}
