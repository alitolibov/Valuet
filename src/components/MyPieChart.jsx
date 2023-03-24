import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: [],
	datasets: [
		{
			label: "",
			coin: ['Ethereum', 'Bitcoin', 'Dash', 'USD'],
			data: [18, 64, 19, 29],
			backgroundColor: [
				"rgba(255, 206, 86, 1)",

				"rgba(54, 162, 235, 1)",
				"#ffffff",
				"red",
			],
			borderColor: [
				"rgba(255, 206, 86, 1)",
				"rgba(54, 162, 235, 1)",
				"#ffffff",
				"red"
			],
			borderWidth: 1,
		},
	],
};

export function MyPieChart() {
	return <Doughnut data={data} />;
}
