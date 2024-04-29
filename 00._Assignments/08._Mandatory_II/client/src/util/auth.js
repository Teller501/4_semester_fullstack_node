import { jwtDecode } from "jwt-decode";
import { navigate } from "svelte-navigator";

export function isTokenExpired(token) {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error("Failed to decode token:", error);
        return true;
    }
}


export async function refreshToken(refreshToken) {
    const response = await fetch("http://localhost:8080/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: refreshToken }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        return data.token;
    } else {
        logoutUser();
        navigate("/", {
            replace: true,
        });
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
}
