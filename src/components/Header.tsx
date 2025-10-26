"use client"

import { Menu, User, Search, HelpCircle } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex cursor-pointer items-center gap-2">
                <Menu className="h-6 w-6" />
                <span className="font-semibold">MENU</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/" passHref>
                <DropdownMenuItem>Home</DropdownMenuItem>
              </Link>
              <Link href="/courses" passHref>
                <DropdownMenuItem>Courses</DropdownMenuItem>
              </Link>
              <Link href="/blog" passHref>
                <DropdownMenuItem>Blog</DropdownMenuItem>
              </Link>
              <Link href="/resources" passHref>
                <DropdownMenuItem>Resources</DropdownMenuItem>
              </Link>
              <Link href="/faq" passHref>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 group">
            <div className="text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
                <h1 className="text-xl font-bold tracking-wider">SCS</h1>
                <p className="text-xs text-muted-foreground">SIMPLIFIED COMPUTER SCIENCE</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
          <User className="h-6 w-6" />
          <Link href="/faq" passHref>
            <HelpCircle className="h-6 w-6" />
          </Link>
          <Search className="h-6 w-6" />
        </div>
      </div>
    </header>
  )
}
