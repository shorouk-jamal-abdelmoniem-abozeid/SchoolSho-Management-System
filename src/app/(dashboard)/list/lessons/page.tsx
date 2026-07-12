import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, lessonsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import FormModal from "@/components/FormModal"

type Lesson = {
    id: number
    subject: string
    class: string
    teacher: string
}

const columns = [
    { header: "Subject Name", accessor: "subject" },
    { header: "Class", accessor: "class", className: "hidden md:table-cell" },
    { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "actions" }
]

const LessonsListPage = () => {
    const renderRow = (item: Lesson) => (
        <>
            <td>
                <h3 className="font-semibold">{item.subject}</h3>
            </td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModal table="lesson" type="update" data={item} />
                            <FormModal table="lesson" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </>
    )

    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 my-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold hidden md:block">All Lessons</h1>
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
                            <FormModal table="lesson" type="create" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={lessonsData} />
            <Pagination />
        </div>
    )
}

export default LessonsListPage
