import React from "react"
import "./Widget.css"
import VisibilityIcon from "@mui/icons-material/Visibility"
const Widget = () => {
  return (
    <>
      <div className='widgetSm'>
        <span className='widgetSmTitle'>New Join Members</span>
        <ul>
          <li>
            <img src='https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg' alt='' />
            <div className='widgetUser'>
              <span className='widgetUsername'>Anna Keller</span>
              <span className='widgetUserTitle'>Software WEnginner</span>
            </div>
            <button>
              <VisibilityIcon className='widgeStIcon' />
              Display
            </button>
          </li>
          <li>
            <img src='https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg' alt='' />
            <div className='widgetUser'>
              <span className='widgetUsername'>Anna Keller</span>
              <span className='widgetUserTitle'>Software WEnginner</span>
            </div>
            <button>
              <VisibilityIcon className='widgeStIcon' />
              Display
            </button>
          </li>
          <li>
            <img src='https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg' alt='' />
            <div className='widgetUser'>
              <span className='widgetUsername'>Anna Keller</span>
              <span className='widgetUserTitle'>Software WEnginner</span>
            </div>
            <button>
              <VisibilityIcon className='widgeStIcon' />
              Display
            </button>
          </li>
          <li>
            <img src='https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg' alt='' />
            <div className='widgetUser'>
              <span className='widgetUsername'>Anna Keller</span>
              <span className='widgetUserTitle'>Software WEnginner</span>
            </div>
            <button>
              <VisibilityIcon className='widgeStIcon' />
              Display
            </button>
          </li>
          <li>
            <img src='https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg' alt='' />
            <div className='widgetUser'>
              <span className='widgetUsername'>Anna Keller</span>
              <span className='widgetUserTitle'>Software WEnginner</span>
            </div>
            <button>
              <VisibilityIcon className='widgeStIcon' />
              Display
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Widget
