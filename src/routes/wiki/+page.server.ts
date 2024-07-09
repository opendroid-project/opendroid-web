export async function load() {
	const wiki_doc = `https://opendroid-docs-cdn.pugzarecute.com/wiki.md`;

	const markdownFetch = await fetch(wiki_doc);

	const markdown = await markdownFetch.text();

	return {
		markdown: markdown.toString()
	};
}
