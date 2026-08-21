"use client";

import { useState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

export default function Navbar() {
    const user = null;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto">

                <div className="flex items-center gap-3">
                    <MobileNav />
                    <Link href="/" className="font-heading font-bold text-xl tracking-tight">
                        PendoraTube
                    </Link>
                </div>

                <NavLinks />

                <div className="flex items-center gap-3">
                    {!user && (
                        <div className="hidden md:flex items-center gap-2">
                            <Button variant="outline" asChild size="lg">
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button asChild size="lg">
                                <Link href="/register">Register</Link>
                            </Button>
                        </div>
                    )}

                    <UserMenu user={user} />
                </div>

            </div>
        </header>
    );
}