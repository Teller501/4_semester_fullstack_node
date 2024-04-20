export async function fetchGet(url, token) {
    let data;
    try {
        const response = await fetch(url, {
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await response.json();
        data = result.data;
    } catch (error) {
        console.error(error);
    }

    return data;
}

export async function fetchPost(url, body) {
    let status = 0;
    try {
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        status = response.status;

        if (!response.ok) {
            console.error(`HTTP error! Status: ${status}`);
            return { status };
        }

        const data = await response.json();
        return { status, data };
    } catch (error) {
        console.error("Fetch error:", error);
        return { status, error: error.toString() };
    }
}
