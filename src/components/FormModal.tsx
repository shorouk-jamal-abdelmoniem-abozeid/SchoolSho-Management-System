"use client"
import dynamic from "next/dynamic";
import { useState } from "react";
const TeacherForm = dynamic(() => import("./Forms/TeacherForm"), {
    loading: () => <h1>Loading...</h1>,
});

const StudentForm = dynamic(() => import("./Forms/StudentForm"), {
    loading: () => <h1>Loading...</h1>,
});

const ParentForm = dynamic(() => import("./Forms/ParentForm"), {
    loading: () => <h1>Loading...</h1>,
});

const SubjectForm = dynamic(() => import("./Forms/SubjectForm"), {
    loading: () => <h1>Loading...</h1>,
});

const ClassForm = dynamic(() => import("./Forms/ClassForm"), {
    loading: () => <h1>Loading...</h1>,
});
const LessonForm = dynamic(() => import("./Forms/LessonForm"), {
    loading: () => <h1>Loading...</h1>,
});
const ExamForm = dynamic(() => import("./Forms/ExamForm"), {
    loading: () => <h1>Loading...</h1>,
});
const AssignmentForm = dynamic(() => import("./Forms/AssignmentForm"), {
    loading: () => <h1>Loading...</h1>,
});
const ResultForm = dynamic(() => import("./Forms/ResultForm"), {
    loading: () => <h1>Loading...</h1>,
});
const EventForm = dynamic(() => import("./Forms/EventForm"), {
    loading: () => <h1>Loading...</h1>,
});
const AnnouncementForm = dynamic(() => import("./Forms/AnnouncementForm"), {
    loading: () => <h1>Loading...</h1>,
});
const forms: { [key: string]: (type: "create" | "update", data?: any) => JSX.Element } = {
    teacher: (type, data) => <TeacherForm type={type} data={data} />,
    student: (type, data) => <StudentForm type={type} data={data} />,
    parent: (type, data) => <ParentForm type={type} data={data} />,
    subject: (type, data) => <SubjectForm type={type} data={data} />,
    class: (type, data) => <ClassForm type={type} data={data} />,
    lesson: (type, data) => <LessonForm type={type} data={data} />,
    exam: (type, data) => <ExamForm type={type} data={data} />,
    assignment: (type, data) => <AssignmentForm type={type} data={data} />,
    result: (type, data) => <ResultForm type={type} data={data} />,
    event: (type, data) => <EventForm type={type} data={data} />,
    announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
};

const FormModal = (
    { table, type, data, id }: {
        table:
        | "teacher"
        | "student"
        | "parent"
        | "subject"
        | "class"
        | "lesson"
        | "exam"
        | "assignment"
        | "result"
        | "attendance"
        | "event"
        | "announcement";
        type: "create" | "update" | "delete";
        data?: any;
        id?: number;
    }
) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
        type === "create"
            ? "bg-lamaYellow"
            : type === "update"
                ? "bg-lamaSky"
                : "bg-lamaPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === "delete" && id ? (
            <form action="" className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium">
                    All data will be lost. Are you sure to delete this {table}?
                </span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
                    Delete
                </button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](type, data)
        ) : (
            "Form not found!"
        );
    };

    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                <img src={`/${type}.png`} alt="" width={16} height={16} />
            </button>

            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] max-h-screen overflow-y-auto">
                        <Form />
                        <div
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <img src="/close.png" alt="close" width={20} height={20} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;
