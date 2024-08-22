import { useEffect, useState } from "react";
import { checkValidToken, getUserRoleFromToken } from "../services/token";

const ProtectedAdminRoute = ({ children }) => {
    const [authorized, setAuthorized] = useState(false);
    const [role, setRole] = useState();
  
    const checkForToken = async () => {
      const response = await checkValidToken();
      setAuthorized(response == true);
    };
    checkForToken();
  
    const getRole = async () => {
      const role = await getUserRoleFromToken();
      setRole(role);
    };
    useEffect(() => {
      getRole();
    }, []);
  
    return (
      <>
        <div>
          {authorized && role === "ADMIN" ? children : <p>Not Authorized</p>}
        </div>
      </>
    );
  };
  export default ProtectedAdminRoute;