export function checkLogin() {
	const token = localStorage.getItem("token");
    return !!token
}
