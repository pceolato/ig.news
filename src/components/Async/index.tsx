import { useEffect, useState } from "react"

export function Async() {
    const [isButtonNotVisible, setIsButtonNotVisible] = useState(false)
     
    useEffect(() => {
        setTimeout(() => {
            setIsButtonNotVisible(true)
        }, 1000)
    }, [])

    return (
        <div>
            <div>Hello World</div>
            { !isButtonNotVisible &&  <button>Button</button>}
        </div>
    )
}