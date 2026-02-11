import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, Stack, Typography } from "@mui/joy";
import CharacterTypeIcon from "../CharacterTypeIcon";
import type { ListCharacter } from "../../types/list-character";

interface CharacterListProps {
  characters: ListCharacter[];
}
export default function characterList({ characters }: CharacterListProps) {
  return (
    <Stack direction="column">
      <Typography level="h2">Characters</Typography>
      <List className="w-[40vw]">
        {characters.map((e) => (
          <ListItem>
            <ListItemButton>
              <CharacterTypeIcon type={e.type} />
              <ListItemContent>{e.name}</ListItemContent>
              <ListItemDecorator className="gap-x-1">
                <i className="ra  ra-gold-bar" />
                <small>{e.shins}</small>
              </ListItemDecorator>
              <ListItemDecorator>
                <KeyboardDoubleArrowUp /> <small>{e.tier}</small>
              </ListItemDecorator>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
