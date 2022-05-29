import "./App.css"
import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductsList from "./pages/productsList/ProductsList"

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <div className='appContainer'>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <UserList />
            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>
            <Route path='/newUser'>
              <NewUser />
            </Route>
            <Route path='/products'>
              <ProductsList />
            </Route>
            {/*<Route path='/products/:productsId'>
              <ProductsList />
            </Route>
            <Route path='/newproducts'>
              <ProductsList />
            </Route>*/}
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
