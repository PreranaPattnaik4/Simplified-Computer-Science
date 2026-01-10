
"use client"

import { Menu, User, Search, LogIn, UserPlus, X } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useState } from "react"
import AuthModal from "./AuthModal"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses-live", label: "Courses" },
  { href: "/blog", label: "Blogs" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const handleLoginSuccess = () => {
    setIsAuthModalOpen(false);
    setIsLoggedIn(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex cursor-pointer items-center gap-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="font-semibold text-sm">MENU</span>
            </button>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 group">
              <Link href="/" className="cursor-pointer">
                <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <Image src="https://i.postimg.cc/xTnRfMqk/simplifiedcomputerscience.png" alt="Simplified Computer Science Logo" width={120} height={40} priority />
                </div>
              </Link>
          </div>

          <div className="flex items-center gap-4">
            <Search onClick={() => setIsSearchOpen(true)} className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/dashboard" passHref><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
                    <Link href="/profile" passHref><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                    <Link href="#" passHref><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Log out</DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)}>
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Sign In</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Sign Up</span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      {/* Full-screen Menu Overlay */}
      <div className={cn(
          "fixed top-16 left-0 right-0 bottom-0 z-30 bg-white transition-all duration-500 ease-in-out",
          isMenuOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-full opacity-0 invisible"
      )}>
        <div className="container mx-auto max-w-7xl px-4 h-full">
            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-4 pt-16">
                {navLinks.map((link) => {
                    const isActive = (pathname === '/' && link.href === '/') || (link.href !== '/' && pathname.startsWith(link.href));
                    return (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                            <div className={cn(
                                "w-screen py-4 text-center font-bold text-lg tracking-wider text-gray-700 hover:bg-gray-100",
                                isActive && "bg-gray-200/70 text-black"
                            )}>
                                {link.label.toUpperCase()}
                            </div>
                        </Link>
                    )
                })}
                 <Link href={isLoggedIn ? "/profile" : "#"} onClick={() => {
                   setIsMenuOpen(false);
                   if (!isLoggedIn) setIsAuthModalOpen(true);
                 }}>
                    <div className="w-screen py-4 text-center font-bold text-lg tracking-wider text-gray-700 hover:bg-gray-100">
                        MY PROFILE
                    </div>
                </Link>
            </nav>
        </div>
      </div>

       {/* Search Overlay */}
      <div className={cn(
        "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
        isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <button onClick={() => setIsSearchOpen(false)} className="absolute top-6 right-8 text-white/70 hover:text-white">
          <X size={32} />
        </button>
        <div className="h-full flex items-center justify-center">
            <div className="relative w-full max-w-xl">
                <Input 
                    type="search" 
                    placeholder="Search here..." 
                    className="w-full h-16 pl-6 pr-16 rounded-full bg-transparent text-white text-xl border-2 border-white/50 focus:border-white focus:ring-0 placeholder:text-white/50"
                />
                <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
                    <Search size={24} />
                </button>
            </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onOpenChange={setIsAuthModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  )
}
