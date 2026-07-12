import React from "react"

type Column = {
  header: string
  accessor: string
  className?: string
}

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: Column[]
  renderRow: (item: any) => React.ReactNode
  data: any[]
}) => {
  return (
    <table className="w-full h-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr
            key={i}
            className={`border-b border-gray-200 text-sm ${
              i % 2 === 0 ? "bg-slate-50" : "bg-white"
            } hover:bg-lamaPurpleLight`}
          >
            {renderRow(item)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
