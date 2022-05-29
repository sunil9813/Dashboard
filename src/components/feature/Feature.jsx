import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import React from "react"
import "./feature.css"

const Feature = () => {
  return (
    <>
      <div className='feature'>
        <div className='featureItem'>
          <span className='featureTitel'>Revanue</span>
          <div className='featuredMoneyContainer'>
            <span className='featureMoney'>$2,417</span>
            <span className='featureMoneyRate'>
              -11.4 <ArrowDownward className='featureIcon negative' />
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>

        <div className='featureItem'>
          <span className='featureTitel'>Sales</span>
          <div className='featuredMoneyContainer'>
            <span className='featureMoney'>$5,417</span>
            <span className='featureMoneyRate'>
              -2.4 <ArrowDownward className='featureIcon negative' />
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featureItem'>
          <span className='featureTitel'>Cost</span>
          <div className='featuredMoneyContainer'>
            <span className='featureMoney'>$1,417</span>
            <span className='featureMoneyRate'>
              2.4 <ArrowUpward className='featureIcon postive' />
            </span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
        </div>
      </div>
    </>
  )
}

export default Feature
