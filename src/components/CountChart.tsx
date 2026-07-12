"use client"
import Image from 'next/image';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Total', count: 106, fill: 'white' },
    { name: 'Girls', count: 53, fill: '#FAE27C' },
    { name: 'Boys', count: 53, fill: '#C3EBFA' },
];

const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-[400px] p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* CHART */}
            <div className='w-full h-[250px] relative'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar
                            background
                            dataKey="count"
                        />
                        <Tooltip />
                    </RadialBarChart>
                </ResponsiveContainer>
                <img src="/maleFemale.png" alt="" width={50} height={50}  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '/>
            </div>

            {/* BOTTOM */}
            <div className="flex justify-center gap-20 mt-4">
                {/* Boys */}
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
                    <div className="flex flex-col">
                        <h1 className="font-bold">1,234</h1>
                        <h2 className="text-xs text-gray-400">Boys [55%]</h2>
                    </div>
                </div>

                {/* Girls */}
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
                    <div className="flex flex-col">
                        <h1 className="font-bold">1,234</h1>
                        <h2 className="text-xs text-gray-400">Girls [45%]</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountChart;
