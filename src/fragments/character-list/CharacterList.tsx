import { KeyboardDoubleArrowUp } from '@mui/icons-material'
import { Table, Typography, Sheet } from '@mui/joy'
import type { ListCharacter } from '../../types/list-character'
import { useEffect, useState } from 'react'
import api from '../../api/axios'
import type { AxiosResponse } from 'axios'
import type { Pagination } from '../table-pagination/pagination-types'
import PaginationFooter from '../table-pagination/PaginationFooter'
import CharacterListNoResults from './CharacterListNoResults'
import CharacterRow from './CharacterRow'

interface CharacterResponseBody extends Pagination {
  characters: ListCharacter[]
}

interface CharacterListProps {
  onCharacterSelected: (id: string) => void
}
export default function characterList({
  onCharacterSelected,
}: CharacterListProps) {
  const [characters, setCharacters] = useState<ListCharacter[]>([])
  const [pagination, setPagination] = useState<Pagination>({
    size: 0,
    page: 0,
    numPages: 0,
    total: 0,
  })

  useEffect(() => {
    const requestCharactersForUser = async () => {
      const response: AxiosResponse<CharacterResponseBody> = await api.get(
        '/protected/characters/user',
      )

      const { characters, ...rest } = response.data

      setCharacters(characters)
      setPagination(rest)
    }

    requestCharactersForUser()
  }, [])

  const handlePaginationChange = async (pagination: Pagination) => {
    const response: AxiosResponse<CharacterResponseBody> = await api.get(
      '/protected/characters/user',
      {
        params: pagination,
      },
    )

    const { characters, ...rest } = response.data

    setCharacters(characters)
    setPagination(rest)
  }

  return (
    <Sheet
      variant="outlined"
      sx={{
        display: 'flex',
        flex: '1',
        width: '100%',
        height: '100%',
        boxShadow: 'sm',
        borderRadius: 'sm',
        flexDirection: 'column',
      }}
    >
      <Table sx={{ flex: 1, minHeight: 0, maxHeight: '100vh' }}>
        <thead>
          <tr>
            <td className="w-10"></td>
            <td className="auto text-center align-middle">
              <Typography fontSize={22} level="h1">
                Characters
              </Typography>
            </td>
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
            <CharacterListNoResults />
          ) : (
            characters.map((character, idx) => (
              <CharacterRow
                character={character}
                index={idx}
                onCharacterSelected={onCharacterSelected}
              />
            ))
          )}
          <tr>
            <td colSpan={4} className="!h-[100%] !p-0" />
          </tr>
        </tbody>
      </Table>
      <PaginationFooter
        pagination={pagination}
        onChange={handlePaginationChange}
        resultsLength={characters.length}
      />
    </Sheet>
  )
}
