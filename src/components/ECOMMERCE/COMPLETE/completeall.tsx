import React from 'react'
import Header from '../SEPERATE/header'
import Overview from '../SEPERATE/overview'
import Chart from '../SEPERATE/WEEKLYSALE/chart'

import MarketingSales from '../SEPERATE/marketingsales'
import VisitsByDay from '../SEPERATE/visitsbyday'
import Footer from '../SEPERATE/footer'
import ActivitySection from '../SEPERATE/activitytimeline'


const ECommerce = () => {
  return (
    <div>
    <Header/>
    <Overview/>
    <Chart/>
    <ActivitySection/>
    <MarketingSales/>
     <VisitsByDay/> 
          <Footer/>
    
    </div>
  )
}

export default ECommerce