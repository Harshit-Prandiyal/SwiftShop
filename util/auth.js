import axios from 'axios';

const API_KEY = 'AIzaSyBUgl51xd5lsoyTfVqO6ndqh7eA9Jonlpk';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  }).catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("Firebase error",error.response.data);
    } else if (error.request) {
      console.log("Firebase error",error.request);
    } else {
      console.log("Firebase error", error.message);
    }
  });
  
  const token = response.data.idToken;
  console.log(token);
  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}