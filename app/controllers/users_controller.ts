import Post from '#models/post'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */

  async index({}: HttpContext) {
    const data = await User.all()
    return data
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['password', 'name'])
    const user = await User.create(data)
    return response.status(201).send(user)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const id = params.id
    const user = await User.findOrFail(id)
    return user
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const id = params.id
    const data = request.only(['name', 'password'])
    const user = await User.findOrFail(id)
    user.merge(data)
    await user.save()
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const id = params.id
    const user = await User.findOrFail(id)
    await user.delete()
  }

  async posts({ params }: HttpContext) {
    const id = params.id
    const posts = await Post.query().where('user_id', id)
    return posts
  }
}
