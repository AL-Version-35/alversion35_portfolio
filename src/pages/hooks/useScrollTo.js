import { useState, useEffect } from 'react'

function useScrollTo() {
    let [classRef, setClassRef] = useState("")

    function scrollTo(target) {
        setClassRef(target.href)
    }

    useEffect(() => {
        if (classRef !== "") {
            let className = classRef.slice(1)
            let section = document.querySelector(`${className}`)
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
                setClassRef("")
            }
        }
    }, [classRef])

    console.log(classRef)

    return {
        scrollTo
    }
}

export default useScrollTo