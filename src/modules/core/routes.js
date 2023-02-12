import userRouter from '../users/userRoutes';

export default function routes(app){
    app.use('/api', userRouter)
}
