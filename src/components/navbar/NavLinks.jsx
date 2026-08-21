import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Videos", href: "/videos" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavLinks() {
    return (
        <nav className="hidden md:flex gap-4">
            {navItems.map(items => (
                <Link
                    key={items.label}
                    href={items.href}
                >
                    {items.label}
                </Link>
            ))}
        </nav>
    )
}