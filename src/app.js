import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    message: "welcome"
  })
});


export default app
