import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice, formatDate, getHours } from "@/lib/utils"
import { CalendarX2Icon } from "lucide-react"
import Image from "next/image"

const mockBookings = [
  {
    id: "1",
    date: new Date(),
    status: "CONFIRMED",
    service: {
      name: "Corte de Cabelo",
      price: 35,
      barbershop: {
        name: "Barbearia Vintage",
        imageUrl: "/barbershop-1.jpg"
      }
    }
  },
  {
    id: "2",
    date: new Date(),
    status: "CONFIRMED",
    service: {
      name: "Barba",
      price: 25,
      barbershop: {
        name: "Corte & Estilo",
        imageUrl: "/barbershop-2.jpg"
      }
    }
  }
]

const BookingsPage = () => {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />

      <div className="px-5 pt-20 pb-6 flex flex-col gap-6">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        {mockBookings.length > 0 ? (
          <div className="flex flex-col gap-3">
            {mockBookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="p-3 flex gap-3">
                  <div className="relative min-h-[110px] min-w-[110px]">
                    <Image
                      src={booking.service.barbershop.imageUrl}
                      alt={booking.service.barbershop.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <h2 className="font-bold">{booking.service.barbershop.name}</h2>
                    <p className="text-sm text-gray-400">{booking.service.name}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex flex-col">
                        <p className="text-sm">{formatDate(booking.date)}</p>
                        <p className="text-sm">{getHours(booking.date)}</p>
                      </div>

                      <p className="text-primary text-sm font-bold">
                        {formatPrice(booking.service.price)}
                      </p>
                    </div>

                    <Button variant="secondary" className="w-full mt-3">
                      Cancelar Reserva
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-3">
            <CalendarX2Icon className="h-16 w-16 text-gray-400" />
            <p className="text-gray-400 text-center">
Você ainda não tem nenhum agendamento.</p>
            <Button variant="secondary" asChild>
              <Link href="/">Fazer Agendamento</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingsPage
