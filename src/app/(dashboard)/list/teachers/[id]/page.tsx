import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal"
import Performance from "@/components/Performance"
import Link from "next/link"
const SingleTeacherPage = () => {
    return (
        <div className='flex-1 p-4 flex flex-col xl:flex-row gap-4'>
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex-1 p-4 flex flex-col lg:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/4">
                            <img
                                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt=""
                                width={144}
                                height={144}
                                className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full object-cover"
                            />
                        </div>
                        <div className="w-3/4 flex flex-col justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="text-xl font-semibold">John Doe</h1>
                                <FormModal table="teacher" type="update" data={
                                    {
                                        id: 1,
                                        teacherId: "1234567890",
                                        name: "John Doe",
                                        email: "john@doe.com",
                                        photo:
                                            "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                                        phone: "1234567890",
                                        subjects: ["Math", "Geometry"],
                                        classes: ["1B", "2A", "3C"],
                                        address: "123 Main St, Anytown, USA",
                                    }
                                } />
                            </div>

                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <img src="/blood.png" alt="" width={14} height={14} />
                                        <span>A+</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="/date.png" alt="" width={14} height={14} />
                                        <span>July 2026</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <img src="/mail.png" alt="" width={14} height={14} />
                                        <span className="break-all">user@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="/Phone.png" alt="" width={14} height={14} />
                                        <span>1234 567</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <img src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
                            <img src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div className="">
                                <h1 className="text-xl font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
                            <img src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div className="">
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:[48%]">
                            <img src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6" />
                            <div className="">
                                <h1 className="text-xl font-semibold">6</h1>
                                <span className="text-sm text-gray-400">Classes</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4  h-[800px]">
                    <h1 className="">Teacher's schedule </h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4 ">
                <div className="bg-white rounded-md p-4">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500 ">
                        <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">Teacher's Classes</Link>
                        <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight">Teacher's Students</Link>
                        <Link href="/" className="p-3 rounded-md bg-lamaYellowLight">Teacher's Lessons</Link>
                        <Link href="/" className="p-3 rounded-md bg-pink-50">Teacher's Exams</Link>
                        <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">Teacher's Assignments</Link>
                    </div>
                </div>
                <Performance />
                <Announcements />
            </div>
        </div>
    )
}

export default SingleTeacherPage