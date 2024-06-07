import axiosClient from "../config/axios";

export const useAuth = ({ middleware, url }) => {
    const login = async (formData, setErrors) => {
        try {
            const { data } = await axiosClient.post("/api/login", formData);
            localStorage.setItem("AUTH_TOKEN", data.token);
            setErrors([]);
        } catch (error) {
            setErrors(Object.values(error.response.data.errors));
        }
    };

    const register = () => {};

    const logout = () => {};

    return {
        login,
        register,
        logout,
    };
};
