let BASE_URL = 'http://localhost:3000/api/v1/';

const suspendFun = promise => {
	let status = 'pending';
	let response;

	const suspender = promise.then(
		res => {
			status = 'success';
			response = res;
		},
		err => {
			status = 'error';
			response = err;
		}
	);

	const read = () => {
		switch (status) {
			case 'pending':
				throw suspender;
			case 'error':
				throw response;
			default:
				return response;
		}
	};

	return { read };
};

export const fetchData = END_POINT => {
	const promise = fetch(BASE_URL + END_POINT)
		.then(response => response.json())
		.then(json => json);

	return suspendFun(promise);
};
