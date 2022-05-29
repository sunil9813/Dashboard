import React from "react"
import "./ProductsList.css"
import { DataGrid } from "@mui/x-data-grid"

const ProductsList = () => {
  return (
    <>
      <div className='ProductsList'>
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
      </div>
    </>
  )
}

export default ProductsList
