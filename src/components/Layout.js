import React from "react";
import Header from "./Header";

export default function Layout ({children}) {
    return (
        <>
        <Header/>
        <main className = "container mx-auto p-4 bg-darkgreen-500">
            {children}
        </main>
        </>
    );
}