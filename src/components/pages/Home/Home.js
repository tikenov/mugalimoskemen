import { Text } from '@mantine/core';
import React from 'react'
import sayasat from "../../../images/Sayasat.jpg"
import './Home.scss'
const Home = () => {
  const data = [
    {
      title: 'Стипендиаттар',
      stats: '70+'
    },
    {
      title: 'Түлектер',
      stats: '20+'
    },
    {
      title: 'Cеріктестік құру',
      stats: '10+'
    },
    {
      title: 'Қорлармен байланыс құру',
      stats: '20+'
    },
    {
      title: 'Cеминар ұйымдастыру',
      stats: '25+'
    },
  ];

  const stats = data.map((stat) => (
    <div key={stat.title} className={"stat"}>
      <Text className={"count"}>{stat.stats}</Text>
      <Text className={"title"}>{stat.title}</Text>
      <Text className={"description"}>{stat.description}</Text>
    </div>
  ));


  return (
    <div className='home'>
      <h2>Біз болашақ мұғалімдердің жаңа буынын құру
        арқылы <span style={{ color: "#EAB32D" }}>саналы қоғамның</span> қалыптасуына үлес қосамыз.</h2>
      <br />
      <div className='row'>
        <h2>“...Сондықтан, баршаңызды осы жолда бірге кызмет етуге шақырамын.„</h2>
        <div className='card'>
          <img src={sayasat} width="200" className="circle" />
          <div>
            <b>Саясат Нұрбек</b>
          </div>
          <div>
            <b>ҚР Ғылым және жоғары білім министрі</b>
          </div>
        </div>
      </div>
      <br />
      <h2>Миссия</h2>
      <div className={"root"}>{stats}</div>
    </div >
  )
}

export default Home