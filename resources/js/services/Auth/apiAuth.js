export async function Login({ email, password }) {
    try {
        const response = await axios.post("/login", {
            email: email,
            password: password,
        });
        return response;
    } catch (error) {
        return error;
    }
}

export async function Logout() {
    try {
        const response = await axios.post("/logout").then(() => {
            return response;
        });
    } catch (error) {
        return error;
    }
}
