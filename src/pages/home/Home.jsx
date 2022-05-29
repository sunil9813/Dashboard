import React from "react"
import Chart from "../../components/chart/Chart"
import { UserData } from "../../Data"
import Feature from "../../components/feature/Feature"
import WidgetL from "../../components/widgetLs/WidgetL"
import Widget from "../../components/widgetSm/Widget"
import "./home.css"

const Home = () => {
  return (
    <>
      <div className='home'>
        <Feature />
        <Chart data={UserData} title='User Analytics' grid dataKey='Active User' />
        <div className='homeWidgets'>
          <Widget />
          <WidgetL />
        </div>
      </div>
    </>
  )
}

export default Home
