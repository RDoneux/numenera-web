import { useEffect, useState } from "react";
import api from "../api/axios";
import type { AxiosResponse } from "axios";
import { List, ListItem, ListItemButton, ListItemContent, ListItemDecorator } from "@mui/joy";

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
            <i className="ra ra-aware" />
            <ListItemContent>{e.name}</ListItemContent>
            <ListItemDecorator className="gap-x-1"><i className="ra ra-ball" /> {e.shins}</ListItemDecorator>
            <ListItemDecorator className="gap-x-1"><i className="ra ra-hive-emblem" /> {e.tier}</ListItemDecorator>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
