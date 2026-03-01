import { Typography } from '@mui/joy'
import type { Pagination } from './pagination-types'
import { useMemo } from 'react'

interface PageRangeLabelProps {
  resultsLength: number
  pagination: Pagination
}
export default function PageRangeLabel({
  resultsLength,
  pagination,
}: PageRangeLabelProps) {
  const labelDisplayedRowsTo = useMemo(() => {
    if (resultsLength === 0) {
      return (pagination.page + 1) * pagination.size
    }
    return Math.min(pagination.total, (pagination.page + 1) * pagination.size)
  }, [resultsLength, pagination])

  return (
    <Typography fontSize={12} lineHeight={3}>
      {resultsLength === 0 ? 0 : pagination.page * pagination.size + 1} -{' '}
      {labelDisplayedRowsTo} of {pagination.total}
    </Typography>
  )
}
