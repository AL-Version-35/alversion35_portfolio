import useScrollTo from '../hooks/useScrollTo.js'
import useBackLogo from '../hooks/useBackLogo.js'

function Navbar() {
    const { scrollTo } = useScrollTo()
    useBackLogo()

    return (
        <header class="header">
            <img id="logo" src="./images/logo.png" alt="AL Version-35" />
            <nav class="navbar">
                <ul>
                    <li class="navbar-button"><a href="#about" onClick={(event) => scrollTo(event.target)}>Sobre</a></li>
                    <li class="navbar-button"><a href="#skills" onClick={(event) => scrollTo(event.target)}>Habilidades</a></li>
                    <li class="navbar-button"><a href="#works" onClick={(event) => scrollTo(event.target)}>Projetos</a></li>
                    <li class="redirect-button">
                        <a href="https://github.com/AL-Version-35"
                            target="_blank"
                            rel="noreferrer">
                            Github
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar