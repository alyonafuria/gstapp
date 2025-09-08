import { useLogin } from "../store";

export default function Login() {
    const { isLogged, setLogged } = useLogin();
    return (
        <>
            <button
                className="p-1 border-2 border-graphite dark:border-dogwood hover:bg-platinum dark:hover:bg-jet"
                onClick={() => setLogged(!isLogged)}
            >
                {isLogged ? "Logout" : "Login"}
            </button>
        </>
    );
}
