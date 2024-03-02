import { type ReactNode } from "react";

interface HeaderProp {

    image: {
        src: string;
        alt: string
    };
    children: ReactNode;
}
export default function Header({image,children}: HeaderProp) {

    return (
        <header>
            <img {...image} />
            <h1>{children}</h1>
        </header>
    )
    
}