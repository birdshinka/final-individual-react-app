import './Nav.css'

function Nav({ setPage }){
    return (
        <div>
            <ul>
                <li onClick={() => setPages("home")}>Home</li>
                <li onClick={() => setPages("about")}>About </li>
                <li onClick={() => setPages("contact")}>Contact</li>
            </ul>
        </div>
    )
}
export default Nav