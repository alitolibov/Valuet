import React, { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";



const data = [
    {
        name: "June",
        uv: 3000,
    },
    {
        name: "July",
        uv: 7000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "August",
        uv: 4500,
    },
    {
        name: "September",
        uv: 8200,
    },
    {
        name: "October",
        uv: 5000,
    },
    {
        name: "November",
        uv: 7000,
    },
    {
        name: "Desember",
        uv: 3800,
    },

    {
        name: "January",
        uv: 8000,
    },
];

const WalletChart = (props) => {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="10" stroke="teansparent" />
                    <XAxis stroke="#54669C" dataKey="name" />
                    <YAxis stroke="#54669C" />
                    <Line type="monotone" dataKey="uv" stroke="#0089D3FF" strokeWidth={4}  />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default WalletChart;
