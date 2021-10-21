import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Profile = ({username, userId}) => {
    if (!userId) {
        return <Redirect to='/' />
    }

    return (
        <div className='container'>
            <div className="blueBg">
                <h1>{username}</h1>
            </div>
        </div>
    );
};

const mapStateToProps = ({users}) => {
    return {
        username: users.user.username,
        userId: users.user.id
    }
}

export default connect(mapStateToProps)(Profile)