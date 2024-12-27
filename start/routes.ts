/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
const PostsController = () => import('#controllers/posts_controller')
import router from '@adonisjs/core/services/router'

router.get('/users', [UsersController, 'index'])
router.post('/users', [UsersController, 'store'])
router.get('/users/:id', [UsersController, 'show'])
router.put('/users/:id', [UsersController, 'update'])
router.delete('/users/:id', [UsersController, 'destroy'])
router.get('/users/:id/posts', [UsersController, 'posts'])

router.get('/posts', [PostsController, 'index'])
router.post('/posts', [PostsController, 'store'])
router.get('/posts/:id', [PostsController, 'show'])
router.put('/posts/:id', [PostsController, 'update'])
router.delete('/posts/:id', [PostsController, 'destroy'])
