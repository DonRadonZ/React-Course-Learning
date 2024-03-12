import { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link,type LinkProps } from "react-router-dom";

type baseProp = {
    children: ReactNode;
    textOnly ?: boolean;
}

type ButtonProps = ComponentPropsWithoutRef<"button"> &
 baseProp & { to ?: never}

type ButtonLinkProps = LinkProps & baseProp & {to: string};

function isRouterLink(
    props: ButtonProps | ButtonLinkProps): props is ButtonLinkProps{
        return "to" in props;
    
}

function Button(props: ButtonProps | ButtonLinkProps) {
    if (isRouterLink(props)){

        const {children, textOnly, ...otherProps} = props;

        return(
            <Link
                className={`button ${textOnly ? "button--text-only" :""}`}
                {...otherProps}
            >
                {children}
            </Link>
            
        )
    }
}

export default Button