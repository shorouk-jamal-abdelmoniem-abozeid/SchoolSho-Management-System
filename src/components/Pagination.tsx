const Pagination = () => {
  return (
    <div className="p-4 flex justify-center items-center text-gray-500 gap-4">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex justify-center items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-lamaSky">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        <button className="px-2 rounded-sm">4</button>
        <button className="px-2 rounded-sm">5</button>
        <button className="px-2 rounded-sm">6</button>
        <button className="px-2 rounded-sm">7</button>
        <button className="px-2 rounded-sm">8</button>
        <button className="px-2 rounded-sm">9</button>
        <button className="px-2 rounded-sm">10</button>
      </div>
      <button
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
