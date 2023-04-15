type Domain = 'page';

type TableKey = `${Domain}:[slug]`;

/**
 * Get the key for a table in the database with the encoded values.
 * Replaces all keys encoded by [key] with the value of the key in the values object
 *
 * @param key			The key to replace
 * @param values	The values to replace the keys with
 */
export function table(key: TableKey, values: Record<string, string | number> = {}) {
	return key.replace(/\[([^\]]+)\]/g, (_, key: string) => `${values[key]}`);
}
