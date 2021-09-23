import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async create({ request }: HttpContextContract) {
        const data = request.only(['name', 'username']);
        console.log(data);
    }

}
