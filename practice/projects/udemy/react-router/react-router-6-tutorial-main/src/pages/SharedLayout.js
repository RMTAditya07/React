import { Outlet} from "react-router-dom";
import SharedNavbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
    <SharedNavbar/>
    <Outlet/>
    </>
  )
}
export default SharedLayout;
