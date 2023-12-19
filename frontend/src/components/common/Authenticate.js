export function authenticate(setIsLoggedIn) {
	const token = localStorage.getItem('token');
	fetch('http://localhost:3001/authenticate', {
		headers: {
			Authorization: token, // Use the token
		},
	})
		.then((response) => {
			if (response.ok) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
				throw new Error('Not logged in');
			}
		})
		.catch(() => {
			setIsLoggedIn(false);
		});
}
