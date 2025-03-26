"use client"
import { use } from 'react'

export default function Users({ users }) {

    const currentUsers = use(users)

    return (
        <ul>
            {currentUsers.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    )
}
