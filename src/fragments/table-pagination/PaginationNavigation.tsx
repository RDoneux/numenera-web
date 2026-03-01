import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, IconButton } from '@mui/joy'
import type { Pagination } from './pagination-types'

interface PaginationNavigationProps {
  pagination: Pagination
  onChange: (pagination: Pagination) => void
}
export default function PaginationNavigation({
  pagination,
  onChange,
}: PaginationNavigationProps) {
  return (
    <Box>
      <IconButton
        disabled={pagination.page <= 0}
        onClick={() => onChange({ ...pagination, page: pagination.page - 1 })}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        disabled={pagination.page >= pagination.numPages - 1}
        onClick={() => onChange({ ...pagination, page: pagination.page + 1 })}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  )
}
