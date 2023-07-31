import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
import api from "../api/shopApi";

const Cart = () => {
  const { user, isAuthenticated } = useAuth0();
  // const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    console.log(isAuthenticated);
    console.log(user);

    const getTokensFromBackend = async () => {
      try {
        const response = await api.get("/api/token");
        const accessToken = response.data.accessToken;
        console.log(response);
        console.log(accessToken);

        // Use the access token as needed (e.g., send it with API requests to your /api/private endpoint)
      } catch (error) {
        console.error(error);
      }
    };

    getTokensFromBackend();
  }, [isAuthenticated, user]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
      </div>
    )
  );
};

export default Cart;
