import { Redis } from 'ioredis';

export const redis = new Redis({
	host: process.env.REDIS_HOST, // Dev: "database",
	port: Number(process.env.REDIS_PORT), // Dev: 6379,
});
