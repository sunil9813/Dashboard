import React from "react"
import "./topbar.css"
import { LanguageRounded, NotificationsOutlined, Settings } from "@mui/icons-material"

const Topbar = () => {
  return (
    <>
      <div className='tobar'>
        <div className='topbarWrapper'>
          <div className='topLeft'>
            <span className='logo'>Dashboad</span>
          </div>
          <div className='topRight'>
            <div className='topbarIconsContainer'>
              <NotificationsOutlined />
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topbarIconsContainer'>
              <LanguageRounded />
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topbarIconsContainer'>
              <Settings />
            </div>
            <img src='https://images.pexels.com/photos/1084554/pexels-photo-1084554.jpeg?cs=srgb&dl=pexels-ba-phi-1084554.jpg&fm=jpg' alt='' className='topAvatar' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
