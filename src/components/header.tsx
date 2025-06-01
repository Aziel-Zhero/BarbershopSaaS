import { Button } from "@/components/ui/button"
import { CalendarDays, Menu, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <Link href="/">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Figaro Flow" width={32} height={32} />
          <h1 className="font-bold text-xl">Figaro Flow</h1>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" asChild>
          <Link href="/bookings">
            <CalendarDays className="h-5 w-5" />
          </Link>
        </Button>

        <Button variant="outline" size="icon">
          <User className="h-5 w-5" />
        </Button>

        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

export default Header