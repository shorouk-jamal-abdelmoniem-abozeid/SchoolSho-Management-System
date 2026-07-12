import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";

const columns = [
    { header: "Info", accessor: "info" },
    { header: "Student ID", accessor: "studentId", className: "hidden md:table-cell" },
    { header: "Grade", accessor: "grade", className: "hidden md:table-cell" },
    { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
    { header: "Address", accessor: "address", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "actions" }
];

type Student = {
    id: number;
    studentId: number;
    name: string;
    email?: string;
    photo: string;
    phone?: number;
    grade: number;
    class: string;
    address: string;
};


const StudentListPage = () => {

    const renderRow = (item: Student) => (
        <>
            <td className="flex gap-2">
                <img
                    src={item.photo}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10 md:hidden xl:block object-cover"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.class}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell ">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/students/${item.id}`}>
                        <button className="bg-lamaSky w-7 h-7 flex items-center rounded-full justify-center">
                            <img src="/view.png" alt="" width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                            <FormModal table="student" type="delete" id={item.id}/>
                    )}
                </div>
            </td>
        </>
    );


    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 my-4">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold hidden md:block">All Students</h1>
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="flex items-center justify-center rounded-full w-8 h-8 bg-lamaYellow">
                            <img src="/filter.png" alt="" width={14} height={14} />
                        </button>
                        <button className="flex items-center justify-center rounded-full w-8 h-8 bg-lamaYellow">
                            <img src="/sort.png" alt="" width={14} height={14} />
                        </button>
                        {role === "admin" && (
                            <FormModal table="student" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={studentsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default StudentListPage;