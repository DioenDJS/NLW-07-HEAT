import prismaClient from "../prisma";

class CreateMessageService {
    async execute(text: string, user_id: string){
       const message = await prismaClient.message.create({
            data: {
                text,
                user_id
            }
       })
    }
}

export { CreateMessageService};

// tempo de video 1:18:43