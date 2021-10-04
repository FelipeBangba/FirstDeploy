import './App.css'
import SimpleBottomNavigation from './components/MainNav'
import Header from './components/Header/Header'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'
export default function App() {
    return(
        <>
        <BrowserRouter>
        <Header/>
        <div className="app">
        <Container>
           <Switch>
                <Route path='/' component={Trending} exact/>
                <Route path='/movies' component={Movies} exact/>
                <Route path='/series' component={Series} exact/>
                <Route path='/search' component={Search} exact/>
              
           </Switch>
        </Container>
        </div>
       
        <SimpleBottomNavigation/>
        </BrowserRouter>
        </>
    )
}
