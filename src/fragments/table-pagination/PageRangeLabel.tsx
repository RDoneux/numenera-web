import { Typography } from '@mui/joy'
import type { Pagination } from './pagination-types'

interface PageRangeLabelProps {
  resultsLength: number
  pagination: Pagination
}
export default function PageRangeLabel({
  resultsLength,
  pagination,
}: PageRangeLabelProps) {
  const getLabelDisplayedRowsTo = () => {
    if (resultsLength === 0) {
      return (pagination.page + 1) * pagination.size
    }
    return Math.min(pagination.total, (pagination.page + 1) * pagination.size)
  }

  return (
    <Typography fontSize={12} lineHeight={3}>
      {resultsLength === 0 ? 0 : pagination.page * pagination.size + 1} -{' '}
      {getLabelDisplayedRowsTo()} of {pagination.total}
    </Typography>
  )
}
