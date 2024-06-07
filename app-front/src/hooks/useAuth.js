import { useEffect } from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axios";

export const useAuth = ({ middleware, url }) => {
    // Obtenemos token del local storage
    const token = localStorage.getItem("AUTH_TOKEN");
    const navigate = useNavigate();

    const {
        data: user,
        error,
        mutate,
    } = useSWR("/api/user", () =>
        axiosClient("/api/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.data)
            .catch((error) => {
                throw Error(error?.response?.data?.errors);
            })
    );

    const login = async (formData, setErrors) => {
        try {
            const { data } = await axiosClient.post("/api/login", formData);
            localStorage.setItem("AUTH_TOKEN", data.token);
            setErrors([]);
            await mutate();
        } catch (error) {
            setErrors(Object.values(error.response.data.errors));
        }
    };

    const register = () => {};

    const logout = () => {};

    useEffect(() => {
        if (middleware === "guest" && url && user) navigate(url);
    }, [user, error]);

    return {
        login,
        register,
        logout,
    };
};
