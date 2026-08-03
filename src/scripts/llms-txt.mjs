import { writeFile } from 'node:fs/promises';

const renderItems = (items, site, depth = 2) => items.flatMap((item) => {
	if (item.link) {
		return [`- [${item.label ?? item.link}](${new URL(item.link, site).href})`];
	}

	if (!item.label || !item.items?.length) return [];

	return [
		`${'#'.repeat(Math.min(depth, 6))} ${item.label}`,
		'',
		...renderItems(item.items, site, depth + 1),
		'',
	];
});

export default ({ sidebar, site }) => ({
	name: 'testomatio-llms-txt',
	hooks: {
		'astro:build:done': async ({ dir }) => {
			const content = [
				'# Testomat.io Documentation',
				'',
				'> Official documentation for Testomat.io, a test management platform for manual and automated testing, test planning, reporting, analytics, and integrations.',
				'',
				'Use these pages as the authoritative source for configuring and using Testomat.io.',
				'',
				...renderItems(sidebar, site),
			].join('\n').trimEnd();

			await writeFile(new URL('llms.txt', dir), `${content}\n`, 'utf8');
		},
	},
});
