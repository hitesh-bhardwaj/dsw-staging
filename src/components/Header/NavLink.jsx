import Link from "next/link"

export const NavLink = ({ text, href, className="" }) => {
    return (
        <Link href={href} data-split="letters" data-letters-delay className={`buttonSplit ${className}`}>
            <div className="overflow-clip">
                <p className="buttonTextShadow leading-[1.4] mt-[-4px]">
                    {text}
                </p>
            </div>
        </Link>
    )
}

export const Links = [
    { text: "Product", href: "#" },
    { text: "Solutions", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Resources", href: "#" },
    { text: "Pilot Program", href: "#" },
    { text: "Contact", href: "#" },
]

export const SocialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: "/assets/icons/facebook.svg"
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: "/assets/icons/linkedin.svg"
    },
    {
        label: "Twitter",
        href: "https://www.twitter.com",
        icon: "/assets/icons/twitter.svg"
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com",
        icon: "/assets/icons/instagram.svg"
    }
]