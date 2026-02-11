import { useEffect, useState } from "react";
import api from "../api/axios";
import type { AxiosResponse } from "axios";
import CharacterList from "../fragments/character-list/CharacterList";

export default function Dashboard() {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    async function getUsers() {
      const characters: AxiosResponse = await api.get(`/protected/characters/user`, { withCredentials: true });
      setCharacters(characters.data);
    }

    getUsers();
  }, []);

  return <CharacterList characters={characters} />;
}
