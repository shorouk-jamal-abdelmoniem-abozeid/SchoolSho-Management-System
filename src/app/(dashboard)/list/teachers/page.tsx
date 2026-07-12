import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, teachersData } from "@/lib/data"
import FormModal from "@/components/FormModal"
import Image from "next/image"
import Link from "next/link"

type Teacher = {
    id: number
    teacherId: number
    name: string
    email?: string
    photo: string
    phone: number
    subjects: string[]
    classes: string[]
    address: string
}

const columns = [
    { header: "Info", accessor: "info" },
    { header: "Teacher ID", accessor: "teacherid", className: "hidden md:table-cell" },
    { header: "Subjects", accessor: "subjects", className: "hidden md:table-cell" },
    { header: "Classes", accessor: "classes", className: "hidden md:table-cell" },
    { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
    { header: "Address", accessor: "address", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "actions" }
]

const TeacherListPage = () => {
    const renderRow = (item: Teacher) => (
        <>
            <td className="flex gap-2">
                <Image
                    src={item.photo}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10 md:hidden xl:block object-cover"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.teacherId}</td>
            <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
            <td className="hidden md:table-cell">{item.classes.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="bg-lamaSky w-7 h-7 flex items-center rounded-full justify-center">
                            <Image src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <FormModal table="teacher" type="delete" id={item.id} />
                    )}
                </div>
            </td>
        </>
    )

    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 my-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold hidden md:block">All Teachers</h1>
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
                            <FormModal table="teacher" type="create" />
                        )}
                    </div>
                </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={teachersData} />
            <Pagination />
        </div>
    )
}

export default TeacherListPage
