import {Switch,Route,Redirect} from 'react-router-dom'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Index from './Pages/Index'
import FoodList from './Pages/FoodList'
import FoodDetail from './Pages/FoodDetail'
import MovieDetail from './Pages/MovieDetail'
import MovieList from './Pages/MovieList'
function App() {
  return (
    <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/' component={Index}></Route>
      <Route path='/food' component={FoodList}></Route>
      <Route path='/movie' component={MovieList}></Route>
      <Route path='/moviedetail' component={MovieDetail}></Route>
      <Route path='/fooddetail' component={FoodDetail}></Route>
      <Redirect to='/login'></Redirect>
    </Switch>
  );
}

export default App;
