import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */

export const createPostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6),
    description: vine.string().trim().escape(),
    type: vine.enum(['blog', 'site']),
    userId: vine.number(),
  })
)

/**
 * Validates the post's update action
 */
export const updatePostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6).optional(),
    description: vine.string().trim().escape().optional(),
    type: vine.enum(['blog', 'site']).optional(),
  })
)
