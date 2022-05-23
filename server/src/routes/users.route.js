const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');
const { authMiddleware } = require('../middlewares/auth.middlewares');

const router = Router();

router.post('/', usersController.registerUser);
router.post('/login', usersController.authUser);
router.patch('/account', authMiddleware, usersController.restoreUser);
router.get('/account', authMiddleware, usersController.profileUser);
router.get('/people', authMiddleware, usersController.allUsers);

module.exports = router;
