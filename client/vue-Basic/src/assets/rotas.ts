const baseRoute = "http://127.0.0.1:3333";

export const apiRoutes = {
	books: {
		base: `${baseRoute}/books`,
		porId: (id: string | number) => `${baseRoute}/books/${id}`,
	},
	auth: {
		login: `${baseRoute}/login`,
		register: `${baseRoute}/register`,
	},
};
