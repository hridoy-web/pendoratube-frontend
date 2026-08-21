import Link from "next/link";
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {

    const user = null;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto">

                {/*Logo*/}
                <div className="">
                    <Link href="/" className="font-bold text-xl tracking-tight">
                        PendoraTube
                    </Link>
                </div>

                {/* dekstop navlinks */}
                <NavLinks />

                <div>
                    {!user && (
                        <div className="hidden md:flex items-center gap-2">
                            <Button variant="outline" size="lg">
                                <Link href="/login" className="font-semibold">Login</Link>
                            </Button>
                            <Button size="lg">
                                <Link href="/register" className="font-semibold">Register</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}