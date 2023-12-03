import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mailcard } from "../Mailboxs/Mailcard"

export function Mailboxs() {
  return (
    (<div key="1" className="lg:grid lg:grid-cols-2 h-screen">
      <div className="dark:bg-[#3D3D3D] h-full overflow-auto">
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold">Your Mails</h1>
          <div className="space-y-4">
            <Mailcard />
            <Card className="p-4 flex flex-col bg-white">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-2">
                  <Avatar alt="User Image" src="/placeholder.svg?height=40&width=40" />
                  <div className="font-medium">Jane Doe</div>
                </div>
                <Badge className="bg-[#D4AF37] text-white">New</Badge>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, possimus harum id impedit voluptas rerum vitae, corporis iste voluptate molestias et unde minus dolorem doloremque dolorum earum quibusdam at similique?
                Amet quibusdam ipsa, porro, consequuntur necessitatibus reprehenderit maiores corporis tempora sint quisquam nisi possimus deleniti, fugiat atque alias praesentium dolor eum doloremque reiciendis et impedit placeat dolorum temporibus voluptatum? Beatae.
                Dolorem in aperiam libero, molestias ullam repellat corrupti saepe alias debitis pariatur perferendis amet iusto eius cumque voluptatum modi deserunt sint eveniet iste. Accusamus unde sequi nihil eaque, consectetur mollitia.
                Obcaecati sunt unde delectus sapiente accusamus rem, tenetur aut ad incidunt consequuntur, ullam quisquam quo. Eius, expedita! Explicabo, optio mollitia! Tempora voluptates provident dignissimos blanditiis quae totam quas sint odio?
                Culpa fugiat voluptatibus consequatur laudantium sunt. Odit quam maiores corporis, fugit veniam vitae exercitationem, voluptatum officiis id amet iste cupiditate voluptatibus. Ea enim quasi rerum quos sequi, in libero mollitia.
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F1ED] dark:bg-[#1F1F1F] p-6 h-full overflow-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Write a Letter</h2>
          <Textarea className="w-full h-96" placeholder="Write your letter here..." />
          <Button className="w-full">Send Letter</Button>
        </div>
      </div>
    </div>)
  );
}
