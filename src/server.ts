import path from 'node:path';
import express from 'express';
import { router } from 'express-file-routing';
import morgan from 'morgan';
import { IS_DEV } from './modules/app/constants';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(IS_DEV ? 'dev' : 'combined'));

// File based routing.
app.use(
	'/',
	router({
		directory: path.join(__dirname, 'routes'),
	}),
);

// Auth middleware.
app.use((req, res, next) => {
	const isDev = process.env.NODE_ENV === 'dev';
	const token = req.headers.authorization?.split(' ')?.[1];

	if (!isDev && (!token || token !== process.env.AUTH_TOKEN)) {
		return res.status(401).end();
	}
	next();
});

// @ts-expect-error Error handling.
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Internal server error.');
});

app.listen(process.env.SERVER_PORT);
