import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Box, FormControl, FormLabel, Option, Select, Table, Typography, IconButton, Sheet, Button } from "@mui/joy";
import type { ListCharacter } from "../../types/list-character";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import type { AxiosResponse } from "axios";
import type { Pagination } from "../../types/pagination";
import CharacterTypeIcon from "../CharacterTypeIcon";

interface CharacterResponseBody extends Pagination {
  characters: ListCharacter[];
}

interface CharacterListProps {
  onCharacterSelected: (id: string) => void;
}
export default function characterList({ onCharacterSelected }: CharacterListProps) {
  const [characters, setCharacters] = useState<ListCharacter[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ size: 0, page: 0, numPages: 0, total: 0 });

  useEffect(() => {
    const requestCharactersForUser = async () => {
      const response: AxiosResponse<CharacterResponseBody> = await api.get("/protected/characters/user");

      const { characters, ...rest } = response.data;

      setCharacters(characters);
      setPagination(rest);
    };

    requestCharactersForUser();
  }, []);

  const handlePaginationChange = async (pagination: Pagination) => {
    const response: AxiosResponse<CharacterResponseBody> = await api.get("/protected/characters/user", {
      params: pagination,
    });

    const { characters, ...rest } = response.data;

    setCharacters(characters);
    setPagination(rest);
  };

  const getLabelDisplayedRowsTo = () => {
    if (characters.length === 0) {
      return (pagination.page + 1) * pagination.size;
    }
    return Math.min(pagination.total, (pagination.page + 1) * pagination.size);
  };

  return (
    <Sheet variant="outlined" sx={{ display: "flex", flex: "1", width: "100%", height: "100%", boxShadow: "sm", borderRadius: "sm", flexDirection: "column" }}>
      <Table sx={{ flex: 1, minHeight: 0, maxHeight: "100vh" }}>
        <thead>
          <tr>
            <td className="w-10"></td>
            <td className="auto"></td>
            <td className="w-10 text-center align-middle">
              <i className="ra ra-gold-bar" />
            </td>
            <td className="w-10 text-center align-middle">
              <KeyboardDoubleArrowUp />
            </td>
          </tr>
        </thead>
        <tbody>
          {characters.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center items-center">
                <Box className="flex align-center justify-center">
                  <div className="flex flex-col !p-3 w-60 gap-3">
                    <Typography>No characters found</Typography>
                    <Button>Create a Character</Button>
                  </div>
                </Box>
              </td>
            </tr>
          ) : (
            characters.map((character, idx) => (
              <motion.tr
                key={character.id}
                className="cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1, // Only for animate
                  backgroundColor: { delay: 0, duration: 0.2 }, // No delay for bg color
                  opacity: { delay: idx * 0.1 }, // Delay for opacity only
                  y: { delay: idx * 0.1 }, // Delay for y only
                }}
                whileHover={{ backgroundColor: "#55555528" }}
                onClick={() => onCharacterSelected(character.id)}
              >
                <td className="text-center align-middle">
                  <CharacterTypeIcon type={character.type} />
                </td>
                <td>{character.name}</td>
                <td className="text-center align-middle">{character.shins}</td>
                <td className="text-center align-middle">{character.tier}</td>
              </motion.tr>
            ))
          )}
          <tr>
            <td colSpan={4} className="!h-[100%] !p-0" />
          </tr>
        </tbody>
      </Table>
      <Box className="flex items-center justify-end gap-6 p-2 border-t border-t-gray-700">
        <FormControl orientation="horizontal" size="sm">
          <FormLabel>Results per page:</FormLabel>
          <Select value={pagination.size} onChange={(_, value) => handlePaginationChange({ ...pagination, size: value as number })}>
            <Option value={2}>2</Option>
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={20}>20</Option>
            <Option value={50}>50</Option>
          </Select>
        </FormControl>

        <Typography fontSize={12} lineHeight={3}>
          {characters.length === 0 ? 0 : pagination.page * pagination.size + 1} - {getLabelDisplayedRowsTo()} of {pagination.total}
        </Typography>

        <Box>
          <IconButton disabled={pagination.page <= 0} onClick={() => handlePaginationChange({ ...pagination, page: pagination.page - 1 })}>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            disabled={pagination.page >= pagination.numPages - 1}
            onClick={() => handlePaginationChange({ ...pagination, page: pagination.page + 1 })}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Sheet>
  );
}
