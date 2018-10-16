const axios 									= require('axios');
axios.defaults.headers.common['Authorization'] 	= `Bearer ${localStorage.getItem('token') || null}`;

// module.exports = {
//   	url: 'https://debate-app-backend.herokuapp.com/api/v1',
//   	setToken: () => {
// 		  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token') || null}`;
//   	},
// };

 let client =  axios.create({
  baseURL: 'https://debate-app-backend.herokuapp.com/api/v1',
  responseType: 'json',
  timeout: 5000,
})

export default client
