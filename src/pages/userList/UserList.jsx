import React, { useState } from "react"
import "./UserList.css"
import { DataGrid } from "@mui/x-data-grid"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { UserRows } from "../../Data"
import { Link } from "react-router-dom"

const UserList = () => {
  const [data, setData] = useState(UserRows)
  // yasle chai hamro data ko id lai linxa
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='UserListUser'>
            <img src={params.row.avater} alt='' />
            {params.row.username}
          </div>
        )
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userListDelete' onClick={() => handleDelete(params.row.id)} />
          </>
        )
      },
    },
  ]

  return (
    <>
      <div className='UserList'>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
      </div>
    </>
  )
}

export default UserList
