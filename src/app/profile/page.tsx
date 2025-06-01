import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LogOutIcon, UserIcon } from "lucide-react"

const mockUser = {
  name: "João Silva",
  email: "joao@example.com",
  avatarUrl: "https://github.com/joao.png"
}

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />

      <div className="px-5 pt-20 pb-6 flex flex-col gap-6">
        <h1 className="text-xl font-bold">Perfil</h1>

        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <img
                  src={mockUser.avatarUrl}
                  alt={mockUser.name}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold">{mockUser.name}</p>
                <p className="text-sm text-gray-400">{mockUser.email}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <UserIcon className="text-gray-400" size={20} />
                <div className="flex flex-col">
                  <p className="font-bold">Meus Dados</p>
                  <p className="text-sm text-gray-400">Gerencie seus dados pessoais</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LogOutIcon className="text-gray-400" size={20} />
                <div className="flex flex-col">
                  <p className="font-bold">Sair</p>
                  <p className="text-sm text-gray-400">Encerrar sessão atual</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage