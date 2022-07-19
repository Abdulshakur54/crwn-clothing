import { Outlet,Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = ()=>{
    return(
        <>
        <div className="navigation">
            <div className="logo-container">
                <Link to="/" className="nav-link">
                    <CrwnLogo />
                </Link>
            </div>
            <div className="nav-links-container ">
                <Link to="/shop" className="nav-link">
                SHOP
                </Link>
                <Link to="/signin" className="nav-link">
                SIGN IN
                </Link>
            </div>
        </div>
        <Outlet/>
        </>
    );
}
export default Navigation;