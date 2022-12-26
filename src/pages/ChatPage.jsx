import { nanoid } from "nanoid"
import { useState } from "react"

export function ChatPage({ onAddChat }) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddChat({
            id: nanoid(),
            name: value
        })
    }
    return (
        <>
            <h1>ChatPage</h1>
            <form action="">
                <input type="text"
                    onChange={handleChange}
                />
                <button
                    onChange={handleSubmit}
                    type="submit"
                >Add Chat</button>
            </form>
        </>
    )
}