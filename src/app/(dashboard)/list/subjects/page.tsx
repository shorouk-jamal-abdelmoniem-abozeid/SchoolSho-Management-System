import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Link from "next/link"
import FormModal from "@/components/FormModal"
import Image from "next/image"

type Subject = {
    id: number
    name: string
    teachers: string[]
}

const columns = [
    { header: "Subject Name", accessor: "name" },
    { header: "Teachers", accessor: "teachers", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "actions" }
]

const SubjectsListPage = () => {
    const renderRow = (item: Subject) => (
        <>
            <td>
                <h3 className="font-semibold">{item.name}</h3>
            </td>
            <td className="hidden md:table-cell">{item.teachers?.join(", ")}</td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModal table="subject" type="update" data={item} />
                            <FormModal table="subject" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </>
    )

    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 my-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold hidden md:block">All Subjects</h1>
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
                            <FormModal table="subject" type="create" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={subjectsData} />
            <Pagination />
        </div>
    )
}

export default SubjectsListPage
