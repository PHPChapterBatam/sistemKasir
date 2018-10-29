import axios from 'axios';

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('http://lumenapi.codewell.co.id/make/user', userData)
        .then(res => history.push('/'))
       
};

// Login - Get User Token
export const loginUser = (userData,history) => dispatch => {
    axios
        .post('http://lumenapi.codewell.co.id/login', userData)
        .then(res => history.push('/dashboard'))
       
};


