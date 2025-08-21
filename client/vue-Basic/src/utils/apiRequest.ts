import axios, { AxiosRequestConfig } from "axios";
import { Router } from "vue-router";

interface ApiRequestOptions {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: any;
	headers?: Record<string, string>;
}

export async function apiRequest(
	route: string,
	router: Router,
	options: ApiRequestOptions = {}
) {
	const token = localStorage.getItem("token");
	console.log("Token: ", token);

	const config: AxiosRequestConfig = {
		url: route,
		method: options.method || "GET",
		headers: {
			"Content-Type": "application/json",
			...(token ? { Authorization: `Bearer ${token}` } : {}),
			...options.headers,
		},
		data: options.body || {},
	};

	try {
		const response = await axios(config);
		return response.data;
	} catch (error: any) {
		console.error("API Request Error:", error.response || error.message);
		if (error.status == 401) {
			router.push({ name: "Login" });
			localStorage.setItem("token", "");
		}
		throw error;
	}
}
