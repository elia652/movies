import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDb } from './lib/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { inngest, functions } from './inngest/index.js';
const app = express();
const PORT = 5000;
await connectDb();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json('Server is listening'));
app.use(clerkMiddleware());
app.use('/api/inngest', serve({ client: inngest, functions }));
app.listen(PORT, () => {
  console.log('Server is listening on port ', PORT);
});
