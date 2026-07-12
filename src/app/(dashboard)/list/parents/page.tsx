import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData } from "@/lib/data";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";

type Parent = {
    id: number;
    name: string;
    email?: string;
    students: string[];
    phone: number;
    address: string;
};

const columns = [
    { header: "Info", accessor: "info" },
    { header: "Students Name", accessor: "students", className: "hidden md:table-cell" },
    { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
    { header: "Address", accessor: "address", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "actions" }
];


const ParentsListPage = () => {

    const renderRow = (item: Parent) => (
        <>
            <td className="flex gap-2">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.students.join(",")}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell ">{item.address}</td>
            <td>
                <div className="flex items-center gap-2">

                    {role === "admin" && (
                        <>
                            <FormModal table="parent" type="update" data={item} />
                            <FormModal table="parent" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </>
    );


    return (
        <div className="bg-white rounded-md p-4 flex-1 m-4 my-4">
            {/* TOP */}
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold hidden md:block">All Parents</h1>
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
                            <FormModal table="parent" type="create" />
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={parentsData} />
            {/* PAGINATION */}
            <Pagination />
        </div>
    );
};

export default ParentsListPage;