import React, { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import Book from './component/Book'
import Form from './component/Form'

function AllRoutes() {

    const [login , useLogin] = useState(0)
  return (
    <>
        <Routes>
            <Route path="/" element={<Book login = {login} />}></Route>
            <Route path="/From" element={<Form login={useLogin} />}></Route>
        </Routes>
    </>
  )
}

export default AllRoutes