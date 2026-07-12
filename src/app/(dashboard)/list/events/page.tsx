import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, eventsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import FormModal from "@/components/FormModal"

type Event = {
    id: number
    title: string
    class: string
    date: string
    startTime: string
    endTime: string
}

const columns = [
    { header: "Title", accessor: "title" },
    { header: "Class", accessor: "class" },
    { header: "Date", accessor: "date", className: "hidden md:table-cell" },
    { header: "Start Time", accessor: "startTime", className: "hidden md:table-cell" },
    { header: "End Time", accessor: "endTime", className: "hidden md:table-cell" }
]

const EventsListPage = () => {
    const renderRow = (item: Event) => (
        <>
            <td>
                <h3 className="font-semibold">{item.title}</h3>
            </td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.startTime}</td>
            <td className="hidden md:table-cell">{item.endTime}</td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModal table="event" type="update" data={item} />
                            <FormModal table="event" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </>
    )

    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 my-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold hidden md:block">All Events</h1>
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="flex items-center justify-center rounded-full w-8 h-8 bg-lamaYellow">
                            <Image src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="flex items-center justify-center rounded-full w-8 h-8 bg-lamaYellow">
                            <Image src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        {role === "admin" && (
                            <FormModal table="event" type="create" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={eventsData} />
            <Pagination />
        </div>
    )
}

export default EventsListPage
