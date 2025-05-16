"use client"

import { useState, useEffect } from "react"
import { Search, Bell, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          {isSearchOpen ? (
            <div className="relative flex items-center md:w-64 lg:w-80">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search (Ctrl+/)"
                className="w-full rounded-md border pl-8 md:w-64 lg:w-80"
                onBlur={() => setIsSearchOpen(false)}
                autoFocus
              />
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Search className="h-4 w-4" />
              <span className="hidden md:inline">Search (Ctrl+/)</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Select language"
          >
            <span className="sr-only">Select language</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 8 6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle theme"
          >
            <span className="sr-only">Toggle theme</span>
            {mounted && theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <button
            className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Notifications"
          >
            <span className="sr-only">Notifications</span>
            <Bell className="h-5 w-5" />
          </button>

          <Avatar className="h-8 w-8 border">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
