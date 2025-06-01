'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { formatPrice } from "@/lib/utils"
import { ptBR } from "date-fns/locale"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface BookingModalProps {
  barbershop: {
    id: string
    name: string
    imageUrl: string
  }
  service: {
    id: string
    name: string
    price: number
    description: string
  }
}

const BookingModal = ({ service, barbershop }: BookingModalProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [hour, setHour] = useState<string | undefined>()
  const router = useRouter()

  const handleBookingSubmit = () => {
    if (!date || !hour) {
      return
    }

    // TODO: Implement booking creation
    router.push('/bookings')
  }

  const timeOptions = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Reservar</Button>
      </DialogTrigger>

      <DialogContent className="max-w-[95%] lg:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            Fazer Reserva
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          <Card>
            <CardContent className="p-3 flex gap-4">
              <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                <img
                  src={barbershop.imageUrl}
                  alt={barbershop.name}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>

              <div className="flex flex-col w-full">
                <h2 className="font-bold">{barbershop.name}</h2>
                <p className="text-sm text-gray-400">{service.name}</p>
                <p className="text-sm text-gray-400">{service.description}</p>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-primary text-sm font-bold">
                    {formatPrice(service.price)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ptBR}
                fromDate={new Date()}
                styles={{
                  head_cell: {
                    width: '100%',
                  },
                  cell: {
                    width: '100%',
                  },
                  button: {
                    width: '100%',
                  },
                  nav_button_previous: {
                    width: '32px',
                    height: '32px',
                  },
                  nav_button_next: {
                    width: '32px',
                    height: '32px',
                  },
                  caption: {
                    textTransform: 'capitalize',
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* Mostrar horários apenas se uma data estiver selecionada */}
          {date && (
            <Card>
              <CardContent className="p-3">
                <h2 className="text-sm font-bold mb-4">Horários disponíveis</h2>

                <div className="grid grid-cols-3 gap-2">
                  {timeOptions.map((time) => (
                    <Button
                      key={time}
                      variant={hour === time ? 'default' : 'outline'}
                      className="rounded-full"
                      onClick={() => setHour(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Button
            disabled={!date || !hour}
            onClick={handleBookingSubmit}
          >
            Confirmar Reserva
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BookingModal