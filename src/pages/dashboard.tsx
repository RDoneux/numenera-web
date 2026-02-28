import { useEffect, useState } from "react";
import api from "../api/axios";
import type { AxiosResponse } from "axios";
import CharacterList from "../fragments/character-list/CharacterList";
import { Box, Stack } from "@mui/joy";
import CharacterOverview from "../fragments/character-overview/CharacterOverview";
import type { ListCharacter } from "../types/list-character";
import type { Character } from "../types/character";

export default function Dashboard() {
  const [characters, setCharacters] = useState<ListCharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | undefined>();

  useEffect(() => {
    async function getUsers() {
      const characters: AxiosResponse<ListCharacter[]> = await api.get(`/protected/characters/user`);
      setCharacters(characters.data);
    }

    getUsers();
  }, []);

  const handleCharacterSelected = async (id: string) => {
    const character: AxiosResponse<Character> = await api.get(`/protected/character/${id}`);
    setSelectedCharacter(character.data);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ minWidth: "20%" }}>
        <CharacterList characters={characters} onCharacterSelected={handleCharacterSelected} />
      </Box>
      <Box sx={{ maxWidth: "80%" }}>{selectedCharacter && <CharacterOverview character={selectedCharacter} />}</Box>
    </Stack>
  );
}
