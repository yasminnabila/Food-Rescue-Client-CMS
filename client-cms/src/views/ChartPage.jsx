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
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { fetchFilter } from "../store/action/food";
import { Link, useNavigate, useParams } from "react-router-dom";
// import moment from 'moment';

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
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();
  const { foodFilter } = useSelector((state) => {
    return state.foodReducer;
  });
  const optionsChart = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  function formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = mm + "/" + dd;
    return date;
  }
  let labels = [];
  for (var i = 0; i < id; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(formatDate(d));
  }
  // const currentMoment = moment().subtract(7, "days");
  // const endMoment = moment().add(1, "days");
  // while (currentMoment.isBefore(endMoment, "day")) {
  //   console.log(currentMoment.format("MM/DD"));
  //   currentMoment.add(1, "days");
  // }

  const dataChart = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
  const arrayQuantity = [];
  const arrayDate = [];
  const obj = {};

  foodFilter.map((x) => {
    x.OrderItems.map((y) => {
      arrayQuantity.push(y.quantity);
      arrayDate.push(
        y.Payment.updatedAt.toString().substring(0, 10).split("-").join("/")
      );
    });
  });
  console.log(arrayQuantity, arrayDate);
  arrayDate.forEach((element, index) => {
    obj[element] = +arrayQuantity[index];
  });
  for (let key in obj) {
    labels.forEach((x, i) => {
      console.log(key.substring(5, 10), x);
      if (key.substring(5, 10) == x) {
        if(!dataChart.datasets[0].data[i]) {
          dataChart.datasets[0].data[i] = obj[key] 
        }else{
          dataChart.datasets[0].data[i] += obj[key] 
        }
      }
    });
  }
  const date = new Date().toString().substring(0, 10);
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
      <Row>
        <Container
          style={{ width: "500px", backgroundColor: "white", padding: 10 }}
          className="mt-5"
        >
          <Line options={optionsChart} data={dataChart} />
        </Container>
        <Container
          style={{ width: "500px", backgroundColor: "white", padding: 10 }}
          className="mt-5"
        >
          <Pie data={data} />
        </Container>
      </Row>
    </>
  );
}
