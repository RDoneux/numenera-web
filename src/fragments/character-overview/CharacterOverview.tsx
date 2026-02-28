import { Grid, Stack, Typography } from "@mui/joy";
import type { Character } from "../../types/character";

interface CharacterOverviewProps {
  character: Character;
}
export default function CharacterOverview({ character }: CharacterOverviewProps) {
  return (
    <Grid container>
      <Grid xs={12}>
        <Typography>{character.name}</Typography>
      </Grid>
      <Grid xs={12}>
        <Stack>
          <Typography>{character.characterFocus.name}</Typography>
          <Typography level="body-xs">{character.characterFocus.description}</Typography>
        </Stack>
      </Grid>
      <Grid>
        <Stack>
          <Typography>{character.characterType.name}</Typography>
          <Typography level="body-xs">{character.characterType.description}</Typography>
        </Stack>
      </Grid>
      <Grid xs={12}>
        <Stack>
          <Typography>{character.characterDescriptor.name}</Typography>
          <Typography level="body-xs">{character.characterDescriptor.description}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
