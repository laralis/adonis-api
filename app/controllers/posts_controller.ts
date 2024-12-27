import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const data = await Post.all()
    return data
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'description', 'type', 'user_id'])
    const post = await Post.create(data)
    response.status(201).send(post)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const id = params.id
    const post = await Post.findOrFail(id)
    return post
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const id = params.id
    const data = request.only(['title', 'description', 'type'])
    const post = await Post.findOrFail(id)
    post.merge(data)
    await post.save()
    return post
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const id = params.id
    const post = await Post.findOrFail(id)
    await post.delete()
  }
}
