import { app } from './app/app';

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running in ${port}`);
});
