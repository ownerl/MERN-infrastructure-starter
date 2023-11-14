import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logout();

        setUser(null);
    }

    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            &nbsp; | &nbsp;
            Welcome <span style={{fontWeight: "bold"}}>{user.name}!</span>
        </nav>
    )
}