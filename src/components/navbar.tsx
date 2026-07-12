import Image from "next/image"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* {SEARCH BAR} */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-gray-300 ring-[1.5px] px-3 ">
                <img src="/search.png" alt="" width={14} height={14} />
                <input type="text" placeholder="Search..."  className="w-[200px] p-2 bg-transparent outline-none"/>
            </div>
            {/* {ICONS AND USER} */}
            <div className="flex items-center justify-end gap-6 w-full">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <img src="/message.png" alt="" />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <img src="/announcement.png" alt="" />
                    <div className="absolute -top-3 -right-3 w-5 h5 flex justify-center items-center rounded-full text-sm bg-purple-500 text-white">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">John Doe</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                    <img src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />

            </div>
        </div>
    )
}

export default Navbar
