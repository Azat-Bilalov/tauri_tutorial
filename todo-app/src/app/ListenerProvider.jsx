import { useNavigate } from "react-router-dom";
import { listen } from "@tauri-apps/api/event";

export function ListenerProvider({ children }) {
    const navigate = useNavigate();

    listen('new-todo', () => {
        navigate('/?new-todo');
    });

    return (
        {children}
    );
}
