import express from 'express';
import createController from '../controllers/quotes';

const createRouter = (options) => {
    const router = new express.Router();
    const controller = createController(options);
    router.get('/', (req, res) => {
        controller.getAll(req, res);
    });
    return router;
};

export default createRouter;
