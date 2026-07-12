const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>Announcements</h1>
                <span className='text-gray-400 text-xs'>View All</span>
            </div>
            <div className='flex flex-col g-4 mt-4'>
                <div className="bg-lamaSkyLight rounded-md p-4 my-2 ">
                    <div className='flex items-center justify-between'>
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs  text-gray-400 rounded-md py-1 px-2 bg-white">2026-07-01</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores non </p>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4 my-2">
                    <div className='flex items-center justify-between'>
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs  text-gray-400 rounded-md py-1 px-2 bg-white">2026-07-01</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores non </p>
                </div>
                <div className="bg-lamaYellowLight rounded-md p-4 my-2">
                    <div className='flex items-center justify-between'>
                        <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                        <span className="text-xs  text-gray-400 rounded-md py-1 px-2 bg-white">2026-07-01</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores non </p>
                </div>
            </div>
        </div>
    )
}

export default Announcements