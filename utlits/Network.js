import axios from 'axios';

export const DEFAULT_ROOT_URL_DEV = 'https://y-fitness.herokuapp.com'


const HTTP_REQUEST = (method, endpoint, post_data, onSuccess, onFailure) => {

	axios({ method, url: `${DEFAULT_ROOT_URL_DEV}/${endpoint}`, data: post_data, })
		.then(function (response) {

			onSuccess && onSuccess(response)
		
		}).catch(function (error) {

			if (error.response) {
				onFailure && onFailure(error)
			} else if (error.request) {
				console.log("Error 0", error.request);
				onFailure && onFailure(error);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error 1", error.message);
				onFailure && onFailure(error);
			}
			console.log("Error 2", error.config);
		});
}

export const POST = (endpoint, post_data, onSuccess, onFailure) => {
	return HTTP_REQUEST("post", endpoint, post_data, onSuccess, onFailure);
}

export const GET = (endpoint, onSuccess, onFailure) => {
	return HTTP_REQUEST("get", endpoint, null, onSuccess, onFailure);
}

export const DELETE = (endpoint, onSuccess, onFailure) => {
	return HTTP_REQUEST("delete", endpoint, null, onSuccess, onFailure);
}

export default { GET, POST, DELETE };