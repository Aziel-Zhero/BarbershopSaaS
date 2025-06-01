import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"
import { ChevronLeftIcon, MapPinIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"

interface Service {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

interface Barbershop {
  id: string
  name: string
  address: string
  imageUrl: string
  rating: number
  services: Service[]
}

const mockBarbershop: Barbershop = {
  id: "1",
  name: "Barbearia Vintage",
  address: "Rua das Flores, 123",
  imageUrl: "/barbershop-1.jpg",
  rating: 4.8,
  services: [
    {
      id: "1",
      name: "Corte de Cabelo",
      description: "Corte tradicional com tesoura ou máquina",
      price: 35,
      imageUrl: "/haircut.jpg"
    },
    {
      id: "2",
      name: "Barba",
      description: "Modelagem e hidratação da barba",
      price: 25,
      imageUrl: "/beard.jpg"
    },
    {
      id: "3",
      name: "Corte e Barba",
      description: "Pacote completo de corte e barba",
      price: 55,
      imageUrl: "/haircut-beard.jpg"
    }
  ]
}

export default async function BarbershopDetailsPage({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ date?: string }> }) {
  const { id } = await params;
  const { date } = await searchParams;

  return (
    <div className="flex flex-col gap-6 pb-6">
      <div className="relative h-[250px] w-full">
        <Link href="/" className="absolute left-4 top-4 z-50">
          <Button size="icon" variant="outline">
            <ChevronLeftIcon />
          </Button>
        </Link>

        <Image
          src={mockBarbershop.imageUrl}
          alt={mockBarbershop.name}
          fill
          style={{ objectFit: "cover" }}
          className="opacity-75"
        />
      </div>

      <div className="px-5 flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-bold">{mockBarbershop.name}</h1>
          <div className="flex items-center gap-2">
            <MapPinIcon className="text-primary" size={18} />
            <p className="text-sm">{mockBarbershop.address}</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <StarIcon className="text-primary" size={18} />
            <p className="text-sm">{mockBarbershop.rating}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Serviços</h2>

          {mockBarbershop.services.map((service) => (
            <Card key={service.id}>
              <CardContent className="p-3 flex gap-4">
                <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <h3 className="font-bold">{service.name}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-primary text-sm font-bold">
                      {formatPrice(service.price)}
                    </p>
                    <BookingModal barbershop={mockBarbershop} service={service} date={date} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
