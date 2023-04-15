import { type Handler } from 'express';
import { getSlugCount, incrementSlug, removeSlug } from '~/modules/page/service';

export const get: Handler = async (req, res) => {
	const { slug } = req.params;

	try {
		const count = await getSlugCount({ slug });
		if (count === null) {
			return res.status(404).json({ error: 'Article not found' }).end();
		}
		return res.status(200).json({ count }).end();
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal error' }).end();
	}
};

export const post: Handler = async (req, res) => {
	const { slug } = req.params;

	try {
		const count = await incrementSlug({ slug });
		if (count === null) {
			throw new Error('Failed to upsert article');
		}
		return res.status(200).json({ count }).end();
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal error' }).end();
	}
};

export const del: Handler = async (req, res) => {
	const { slug } = req.params;

	try {
		const isSuccess = await removeSlug({ slug });
		if (!isSuccess) {
			throw new Error('Failed to remove article');
		}
		return res.status(200).end();
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal error' }).end();
	}
};
