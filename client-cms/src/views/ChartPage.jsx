import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchFood } from '../store/action/food';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ChartPage() {
  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  const dispatch = useDispatch()
  const {food} = useSelector((state) => {
    return state.foodReducer;
  });
  food.forEach(x => {
    data.labels.push(x.name)
    data.datasets[0].data.push(x.sales)
  })
  useEffect(() => {
    console.log(food)
    dispatch(fetchFood());
  }, []);

  return (
    <Container style={{width: "500px"}} className="mt-5">
      <Pie data={data}/>
    </Container>
  );
}
