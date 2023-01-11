import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider/AuthProvider.jsx";


export default function useAuth() {
	return (useContext(AuthContext));
}