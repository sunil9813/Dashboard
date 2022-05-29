import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PersonOutline, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material"
import React from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sideWrapper'>
          <div className='sidebarMenu'>
            <h3>Dashboard</h3>
            <ul className='sidebarList'>
              <Link to='/' className='sidebarListItem active'>
                <LineStyle className='sidebarIcon' />
                Home
              </Link>
              <Link to='/analytics' className='sidebarListItem'>
                <Timeline className='sidebarIcon' />
                Analytics
              </Link>
              <Link to='/sales' className='sidebarListItem'>
                <TrendingUp className='sidebarIcon' />
                Sales
              </Link>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3>Quick Menu</h3>
            <ul className='sidebarList'>
              <Link to='/users' className='sidebarListItem '>
                <PersonOutline className='sidebarIcon' />
                Users
              </Link>
              <Link to='/products' className='sidebarListItem'>
                <Storefront className='sidebarIcon' />
                Products
              </Link>
              <Link className='sidebarListItem'>
                <AttachMoney className='sidebarIcon' />
                Transactions
              </Link>
              <Link className='sidebarListItem'>
                <BarChart className='sidebarIcon' />
                Reports
              </Link>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3>Notification</h3>
            <ul className='sidebarList'>
              <Link className='sidebarListItem '>
                <MailOutline className='sidebarIcon' />
                Mail
              </Link>
              <Link className='sidebarListItem'>
                <DynamicFeed className='sidebarIcon' />
                Feedback
              </Link>
              <Link className='sidebarListItem'>
                <ChatBubbleOutline className='sidebarIcon' />
                Messages
              </Link>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3>Staff</h3>
            <ul className='sidebarList'>
              <Link className='sidebarListItem '>
                <WorkOutline className='sidebarIcon' />
                Manage
              </Link>
              <Link className='sidebarListItem'>
                <Timeline className='sidebarIcon' />
                Analytics
              </Link>
              <Link className='sidebarListItem'>
                <Report className='sidebarIcon' />
                Reports
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
