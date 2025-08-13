import axios from "axios";

export const apiClient =axios.create({
    baseURL:"http://localhost:6546",
     withCredentials: true,
     headers: {
        "Content-Type": "application/json",  // Set the desired content type
    },
});

