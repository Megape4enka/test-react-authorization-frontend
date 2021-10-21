import React, {useState} from 'react'
import {api} from "../api";
import {setUserData} from "../modules/users"
import {Redirect, useHistory} from "react-router-dom"
import {connect} from "react-redux";

const Home = ({setUserData, userId}) => {
    const history = useHistory()

    const [form, setForm] = useState({name: '', password: ''})
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        setError('')
        setForm(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async () => {
        api.login(form).then(response => {
             if (response?.user?.id) {
                 localStorage.setItem('userId', response.user.id)
                 setUserData(response.user)
                 history.push("/profile")
                 return
             }
             if (response?.error) {
                 setError(response.error)
             }
        })
    }

    if (userId) {
        return <Redirect to='/profile' />
    }

    return (
        <div className='container'>
            <div className="blueBg">
                <div className="box">
                    <div className='form'>
                        <h3>Авторизация</h3>
                        <label htmlFor="name">
                            <input onChange={handleInputChange} type="text" placeholder='Ваше имя' name='name'/>
                        </label>
                        <label htmlFor="password">
                            <input onChange={handleInputChange} type="password" placeholder='Ваш пароль' name='password'/>
                        </label>
                        {error && <div className='error'>{error}</div>}
                        <button disabled={!form.name || !form.password} onClick={handleSubmit} type="submit">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setUserData: (data) => dispatch(setUserData(data)),
})

const mapStateToProps = ({users}) => {
    return { userId: users.user.id }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);