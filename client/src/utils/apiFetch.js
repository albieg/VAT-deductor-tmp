async function apiFetch(path, options = {}) {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:3000${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...(options.headers || {})
        },
    });

    return res.json();
}

export default apiFetch;