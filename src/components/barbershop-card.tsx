import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"
import { StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BarbershopCardProps {
  barbershop: {
    id: string
    name: string
    address: string
    imageUrl: string
    rating?: number
    services?: {
      price: number
    }[]
  }
}

const BarbershopCard = ({ barbershop }: BarbershopCardProps) => {
  const lowestPrice = barbershop.services?.reduce((lowest, service) => {
    return service.price < lowest ? service.price : lowest
  }, barbershop.services[0]?.price || 0)

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <Link href={`/barbershops/${barbershop.id}`}>
        <CardContent className="px-1 py-1">
          <div className="relative h-[159px] w-full">
            <div className="absolute top-2 left-2 z-10">
              {barbershop.rating && (
                <Badge variant="secondary" className="flex items-center gap-1 bg-white/80 backdrop-blur-sm">
                  <StarIcon size={12} className="fill-primary text-primary" />
                  <span>{barbershop.rating}</span>
                </Badge>
              )}
            </div>

            <Image
              src={barbershop.imageUrl}
              alt={barbershop.name}
              style={{ objectFit: "cover" }}
              fill
              className="rounded-2xl"
            />
          </div>

          <div className="px-2 pb-3">
            <h2 className="mt-2 font-bold overflow-hidden text-ellipsis text-nowrap">
              {barbershop.name}
            </h2>
            <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
              {barbershop.address}
            </p>
            <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
              A partir de {formatPrice(lowestPrice)}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export default BarbershopCard