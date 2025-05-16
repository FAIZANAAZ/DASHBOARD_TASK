import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-4 md:py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>© {currentYear}, Made with</span>
          <span className="text-red-500">❤️</span>
          <span>by</span>
          <Link href="/" className="font-medium text-primary hover:underline">
            WSM Technologies
          </Link>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link href="/license" className="text-muted-foreground hover:text-foreground hover:underline">
            License
          </Link>
          <Link href="/themes" className="text-muted-foreground hover:text-foreground hover:underline">
            More Themes
          </Link>
          <Link href="/docs" className="text-muted-foreground hover:text-foreground hover:underline">
            Documentation
          </Link>
          <Link href="/support" className="text-muted-foreground hover:text-foreground hover:underline">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  )
}
