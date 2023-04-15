import { redis } from '../db/client';
import { table } from '../db/constants';
import { hasNoPipeError } from '../db/utils';

export async function incrementSlug(params: { slug: string; expiration?: number }) {
	const { slug, expiration = 60 * 60 * 4 } = params;
	const key = table('page:[slug]', { slug });

	const pipeline = redis.pipeline().incr(key).expire(key, expiration);

	const status = await pipeline.exec();
	const isSuccess = status?.every(hasNoPipeError);

	return isSuccess ? status?.[0][1] : null;
}

export async function getSlugCount(params: { slug: string }) {
	const { slug } = params;
	const key = table('page:[slug]', { slug });

	const result = await redis.get(key);
	return parseInt(result ?? '0', 10);
}

export async function removeSlug(params: { slug: string }) {
	const { slug } = params;
	const key = table('page:[slug]', { slug });

	const result = await redis.del(key);
	return result === 1;
}
