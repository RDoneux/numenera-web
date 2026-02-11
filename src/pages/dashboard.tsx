import { useEffect, useState } from "react";
import api from "../api/axios";
import type { AxiosResponse } from "axios";
import { List, ListItem, ListItemButton, ListItemContent, ListItemDecorator } from "@mui/joy";
import CharacterTypeIcon from "../fragments/character-type-icon";
import KeyboardDoubleArrowUp from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function dashboard() {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    async function getUsers() {
      const characters: AxiosResponse = await api.get(`/protected/characters/user`, { withCredentials: true });
      setCharacters(characters.data);
    }

    getUsers();
  }, []);

  return (
    <List className="w-[40vw]">
      {characters.map((e) => (
        <ListItem>
          <ListItemButton>
            <CharacterTypeIcon type={e.type} />
            <ListItemContent>{e.name}</ListItemContent>
            <ListItemDecorator className="gap-x-1">
              <i className="ra  ra-gold-bar" /><small>{e.shins}</small>
            </ListItemDecorator>
            <ListItemDecorator>
              <KeyboardDoubleArrowUp /> <small>{e.tier}</small>
            </ListItemDecorator>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
