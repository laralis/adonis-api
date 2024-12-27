import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    password: vine.string().trim().minLength(6),
    userId: vine.number(),
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).optional(),
    password: vine.string().trim().minLength(6).optional(),
  })
)
