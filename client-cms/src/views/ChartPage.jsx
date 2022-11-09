import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Chart as ChartJS,
  ArcElement,
  Legend, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { fetchFilter } from "../store/action/food";
import { Link, useNavigate, useParams } from "react-router-dom";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function ChartPage() {
  const optionsChart = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return month + '/' + day + '/' + year;
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const dataChart = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [100, 200, 300],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();
  const { foodFilter } = useSelector((state) => {
    return state.foodReducer;
  });
  const options = [
    { value: 7, label: "Last 7 days" },
    { value: 14, label: "Last 14 days" },
    { value: 28, label: "Last 28 days" },
  ];
  
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
    navigate(`/admin/chart/${event.target.value}`);
  };
  foodFilter.forEach((x) => {
    if (x.OrderItems.length != 0) {
      data.labels.push(x.name);
      data.datasets[0].data.push(x.sales);
    }
  });
  useEffect(() => {
    dispatch(fetchFilter(id));
  }, [foodFilter]);

  return (
    <>
      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Container
        style={{ width: "500px", backgroundColor: "white", padding: 10 }}
        className="mt-5"
      >
        <Line options={optionsChart} data={dataChart} />
        <Pie data={data} />
      </Container>
    </>
  );
}
