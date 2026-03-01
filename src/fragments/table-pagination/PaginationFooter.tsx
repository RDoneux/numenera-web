import { Box } from '@mui/joy'
import PageRangeLabel from './PageRangeLabel'
import PageSizeSelect from './PageSizeSelect'
import PaginationNavigation from './PaginationNavigation'
import type { Pagination } from './pagination-types'

interface PaginationFooterProps {
  pagination: Pagination
  resultsLength: number
  onChange: (pagination: Pagination) => void
}
export default function PaginationFooter({
  pagination,
  resultsLength,
  onChange,
}: PaginationFooterProps) {
  return (
    <Box className="flex items-center justify-end gap-6 p-2 border-t border-t-gray-700">
      <PageSizeSelect pagination={pagination} onChange={onChange} />
      <PageRangeLabel resultsLength={resultsLength} pagination={pagination} />
      <PaginationNavigation pagination={pagination} onChange={onChange} />
    </Box>
  )
}
