
function navbar(){
    return(
        <>
            <nav className="flex flex-wrap w-full justify-around py-5 items-center">
                <a href="#" className="logo"><h1>The library</h1></a>
                <ul className="flex gap-3.5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default navbar;