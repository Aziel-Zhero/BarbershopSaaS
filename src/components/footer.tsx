import { CalendarDays, Home, User } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center justify-around py-4 px-2">
      <Link href="/">
        <div className="flex flex-col items-center gap-1">
          <Home className="h-6 w-6 text-gray-400" />
          <span className="text-xs text-gray-400">Início</span>
        </div>
      </Link>

      <Link href="/bookings">
        <div className="flex flex-col items-center gap-1">
          <CalendarDays className="h-6 w-6 text-gray-400" />
          <span className="text-xs text-gray-400">Agendamentos</span>
        </div>
      </Link>

      <Link href="/profile">
        <div className="flex flex-col items-center gap-1">
          <User className="h-6 w-6 text-gray-400" />
          <span className="text-xs text-gray-400">Perfil</span>
        </div>
      </Link>
    </div>
  )
}

export default Footer