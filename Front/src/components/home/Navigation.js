import Login from "./Login";
import PopUp from "../Modal"

function Navigation() {
    return (
        <>
            <p className='logo'>Sharp View</p>
            <PopUp><Login /></PopUp>
        </>
    )
}

export default Navigation
