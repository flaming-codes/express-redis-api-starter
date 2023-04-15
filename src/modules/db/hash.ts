import crypto from 'node:crypto';

export function createShortHash(str: string): string {
	const hash = crypto.createHash('md5').update(str).digest('hex');
	const shortHash = hash.substr(0, 8);
	return shortHash;
}
