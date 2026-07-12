import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, resultsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import FormModal from "@/components/FormModal"

type Result = {
    id: number
    subject: string
    class: string
    teacher: string
    student: string
    date: string
    type: "exam" | "assignment"
    score: number
}

const columns = [
    { header: "Subject", accessor: "subject" },
    { header: "Student", accessor: "student" },
    { header: "Score", accessor: "score", className: "hidden md:table-cell" },
    { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
    { header: "Class", accessor: "class", className: "hidden md:table-cell" },
    { header: "Date", accessor: "date", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "actions" }
]

const ResultsListPage = () => {
    const renderRow = (item: Result) => (
        <>
            <td>
                <h3 className="font-semibold">{item.subject}</h3>
            </td>
            <td>{item.student}</td>
            <td className="hidden md:table-cell">{item.score}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/results/${item.id}`}>
                        <button className="bg-lamaSky w-7 h-7 flex items-center rounded-full justify-center">
                            <Image src="/update.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <>
                            <FormModal table="result" type="update" data={item} />
                            <FormModal table="result" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </>
    )

    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 my-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold hidden md:block">All Results</h1>
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
                            <FormModal table="result" type="create" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={resultsData} />
            <Pagination />
        </div>
    )
}

export default ResultsListPage
