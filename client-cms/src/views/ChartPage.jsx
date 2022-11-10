import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Line, Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
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
        // text: "Chart.js Line Chart",
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
    date = yyyy + "/" + mm + "/" + dd;
    return date;
  }
  let labels = [];
  for (var i = 0; i < id; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(formatDate(d));
  }

  const dataChart = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Portion",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  let array = [];
  let data = {
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

  foodFilter.forEach((x) => {
    x.OrderItems.forEach((y) => {
      arrayQuantity.push(y.quantity);
      arrayDate.push(
        y.Payment.updatedAt.toString().substring(0, 10).split("-").join("/")
      );
    });
  });
  console.log(arrayQuantity, arrayDate);
  arrayDate.forEach((element, index) => {
    if (!obj[element]) {
      obj[element] = +arrayQuantity[index];
    } else {
      obj[element] += +arrayQuantity[index];
    }
  });
  console.log(obj);
  for (let key in obj) {
    labels.forEach((x, i) => {
      console.log(x, key, x == key, obj[key]);
      if (key == x) {
        dataChart.datasets[0].data[i] = obj[key];
      }
    });
  }
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
  }, [id]);

  return (
    <>
      <Container style={{ transform: "scale(100%)" }}>
        <Row className="mt-5 mb-3">
          <h1 className="d-flex justify-content-start" style={{color: "white" }}>Stats</h1>
          <h5 className="d-flex justify-content-start" style={{color: "white" }}>
            Reduction of food waste your business has contributed
          </h5>
        </Row>
        <Row>
          <h6 className="mb-2" style={{color: "white" }}>Filter by:</h6>
        </Row>
        <select value={selected} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <Row className="mb-3 d-flex justify-content-center align-items-center w-100" >
          <Container
            style={{ width: "500px", backgroundColor: "white", padding: 10 }}
            className="p-5 rounded-5"
          >
            <h5 className="mb-5 text-center">
              Daily food rescued (by portion)
            </h5>
            <Line options={optionsChart} data={dataChart} className="mt-5" />
          </Container>
          <Container
            style={{ width: "500px", backgroundColor: "white", padding: 10 }}
            className="my-5 p-5 rounded-5"
          >
            <h5 className="mb-3 text-center">
              Total food rescued (by portion per menu)
            </h5>
            <Pie data={data} />
          </Container>
        </Row>
      </Container>
    </>
  );
}
