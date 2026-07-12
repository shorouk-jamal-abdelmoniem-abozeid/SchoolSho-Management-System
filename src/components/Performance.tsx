"use client"
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 92, fill: "#C3EBFA" },
    { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
    return (
        <div className="bg-white rounded-md h-80 p-4 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
                <h1 className="text-xl font-semibold">Performance</h1>
                <img src="/moreDark.png" alt="" width={16} height={16} />
            </div>

            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            cx="50%"
                            cy="60%"
                            innerRadius={50}
                            isAnimationActive={true}
                            animationDuration={1500}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="flex flex-col items-center -mt-16">
                <h1 className="text-3xl font-bold">9.2</h1>
                <p className="text-xs text-gray-300">of 10 max Sho</p>
            </div>

            <h2 className="mt-4 text-center font-medium">
                1st Semester - 2nd Semester
            </h2>
        </div>
    );
};

export default Performance;
