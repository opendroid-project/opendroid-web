import { error } from '@sveltejs/kit';

export async function load() {
	const wiki_doc = `https://opendroid-docs-cdn.pugzarecute.com/wiki.md`;

	const markdownFetch = await fetch(wiki_doc);

	if(markdownFetch.status != 200) {
		throw error(markdownFetch.status, markdownFetch.statusText);
	}

	const markdown = await markdownFetch.text();

	return {
		markdown: markdown.toString()
	};
}
