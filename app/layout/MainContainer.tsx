import React from 'react'
import "../globals.css"
export const MainContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="main-container">
            {children}
        </div>
    )
}
