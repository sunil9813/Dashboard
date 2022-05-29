import React from "react"
import "./WidgetL.css"

const WidgetL = () => {
  const Button = ({ type }) => {
    return <button className={"button " + type}>{type}</button>
  }
  return (
    <>
      <div className='WidgetL'>
        <h3>Latest Transctions</h3>

        <table className='WidgetLtable'>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

          <tr>
            <td className='user'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg' alt='' />
              <span>Susan Carol</span>
            </td>
            <td className='date'>2 April 2022</td>
            <td className='amount'>$122.00</td>
            <td className='status'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr>
            <td className='user'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg' alt='' />
              <span>Susan Carol</span>
            </td>
            <td className='date'>2 April 2022</td>
            <td className='amount'>$122.00</td>
            <td className='status'>
              <Button type='Declined' />
            </td>
          </tr>
          <tr>
            <td className='user'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg' alt='' />
              <span>Susan Carol</span>
            </td>
            <td className='date'>2 April 2022</td>
            <td className='amount'>$122.00</td>
            <td className='status'>
              <Button type='Pending' />
            </td>
          </tr>
          <tr>
            <td className='user'>
              <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg' alt='' />
              <span>Susan Carol</span>
            </td>
            <td className='date'>2 April 2022</td>
            <td className='amount'>$122.00</td>
            <td className='status'>
              <Button type='Approved' />
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default WidgetL
