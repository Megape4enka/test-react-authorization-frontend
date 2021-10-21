import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import {connect} from "react-redux";
import {useEffect} from "react"
import {setUserData} from "./modules/users";
import {api} from './api'
import { createBrowserHistory } from "history"

function App({userId, setUserData}) {
    console.log(userId)

    useEffect(() => {
        api.getData().then(res => {
            if (!res?.user?.id) {
                return
            }
            console.log(res)
            setUserData(res.user)
        })
    }, [])

    return (
        <BrowserRouter history={createBrowserHistory()}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profile' component={Profile}/>
            </Switch>
        </BrowserRouter>
    )
}
// Получать данные из стора
const mapStateToProps = ({users}) => {
    return { userId: users.user.id }
}
// Получаем функции для обновления стора
const mapDispatchToProps = (dispatch) => ({
    setUserData: (data) => dispatch(setUserData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)