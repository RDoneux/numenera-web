import { FormControl, FormLabel, Select, Option } from '@mui/joy'
import type { Pagination } from './pagination-types'

interface PageSizeSelectProps {
  pagination: Pagination
  onChange: (pagination: Pagination) => void
}
export default function PageSizeSelect({
  pagination,
  onChange,
}: PageSizeSelectProps) {
  return (
    <FormControl orientation="horizontal" size="sm">
      <FormLabel>Results per page:</FormLabel>
      <Select
        value={pagination.size}
        onChange={(_, value) =>
          onChange({ ...pagination, size: value as number })
        }
      >
        <Option value={2}>2</Option>
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
        <Option value={50}>50</Option>
      </Select>
    </FormControl>
  )
}
