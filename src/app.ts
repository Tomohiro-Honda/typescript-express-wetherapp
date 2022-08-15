import express, { Request, Response, NextFunction } from 'express';
import wetherRoutes from './routes/wetherRoutes';
import { SERVER_CONFIG } from './config/serverconf';
const app: express.Express = express();

// body-parserに基づいたリクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORSの許可
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// envファイル定義のポートでAPIサーバ起動
const PORT = SERVER_CONFIG.PORT;
const HOST = SERVER_CONFIG.HOST;
app.listen(Number(PORT), HOST, () => {
  console.log(`Wether app listening on port ${PORT}`);
});

app.use('/wether', wetherRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
  next();
});
