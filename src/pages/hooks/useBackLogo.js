import { useEffect } from 'react'

function useBackLogo() {

    useEffect(() => {
        function checkPageHeight() {
            let pageHeight = window.scrollY
            const logo = document.getElementById("logo")
            const backLogo = logo.cloneNode(true)
            backLogo.setAttribute("id", "back-logo")
            const body = document.getElementById("body")

            if (pageHeight >= 100) {
                backLogo.style.animation = "back-logo"
                if (!backLogo) {
                    body.appendChild(backLogo)
                    logo.setAttribute("style", "visibility: hidden")
                }
            } else if (pageHeight < 100 && backLogo) {
                backLogo.style.animation = "none !important"
                logo.setAttribute("style", "visibility: visible")
                if (backLogo.offsetLeft === 51 && backLogo.offsetTop === 8) {
                    body.removeChild(backLogo)
                }
            }
        }

        checkPageHeight()

        window.addEventListener("scroll", checkPageHeight)

        return () => {
            window.removeEventListener("scroll", checkPageHeight)
        }
    }, [])

    return {}
}

export default useBackLogo