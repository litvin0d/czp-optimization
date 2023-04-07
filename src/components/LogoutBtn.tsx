import axios from "axios";

interface LogoutBtnProps {
    onLogout: () => void;
}

export const LogoutBtn = ({ onLogout }: LogoutBtnProps) => {
    const handleLogout = async () => {
        try {
            axios.get("https://mrsmilegod23.online/api/logout", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                if (res.status === 200) {
                    localStorage.removeItem("token");
                    onLogout();
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button onClick={() => handleLogout()}>Выйти</button>
    )
}