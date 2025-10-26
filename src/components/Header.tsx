
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
                <div className="text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <h1 className="text-xl font-bold tracking-wider">SCS</h1>
                    <p className="text-xs text-muted-foreground">SIMPLIFIED COMPUTER SCIENCE</p>
                </div>
              </Link>
          </div>

          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground" />
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
          "fixed top-16 left-0 right-0 bottom-0 z-30 bg-white transition-transform duration-500 ease-in-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
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

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onOpenChange={setIsAuthModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  )
}
