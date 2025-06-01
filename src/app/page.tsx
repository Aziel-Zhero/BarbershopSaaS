import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Header from "@/components/header"
import BarbershopCard from "@/components/barbershop-card"

const mockBarbershops = [
  {
    id: "1",
    name: "Barbearia Vintage",
    address: "Rua das Flores, 123",
    imageUrl: "/barbershop-1.jpg",
    rating: 4.8,
    services: [{ price: 35 }, { price: 45 }, { price: 25 }]
  },
  {
    id: "2",
    name: "Corte & Estilo",
    address: "Av. Principal, 456",
    imageUrl: "/barbershop-2.jpg",
    rating: 4.5,
    services: [{ price: 30 }, { price: 40 }, { price: 20 }]
  },
  {
    id: "3",
    name: "Barber Elite",
    address: "Praça Central, 789",
    imageUrl: "/barbershop-3.jpg",
    rating: 4.9,
    services: [{ price: 40 }, { price: 50 }, { price: 30 }]
  },
  {
    id: "4",
    name: "Classic Cuts",
    address: "Rua do Comércio, 321",
    imageUrl: "/barbershop-4.jpg",
    rating: 4.7,
    services: [{ price: 35 }, { price: 45 }, { price: 25 }]
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />
      
      <div className="px-5 pt-20 pb-6 flex flex-col gap-6">
        {/* Search Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Encontre a barbearia ideal</h2>
          <p className="text-sm text-gray-400">Escolha a barbearia e faça seu agendamento</p>
        </div>

        <div className="flex gap-2">
          <Input placeholder="Buscar barbearia..." />
          <Button variant="default" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Featured Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs uppercase text-gray-400 font-bold">Destaques</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockBarbershops.slice(0, 2).map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>

        {/* Popular Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs uppercase text-gray-400 font-bold">Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockBarbershops.slice(2, 4).map((barbershop) => (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
