export async function load() {
	const wiki_doc = `https://raw.githubusercontent.com/opendroid-project/docs/dev-webrender/wiki.md`;

	const markdownFetch = await fetch(wiki_doc);

	const markdown = await markdownFetch.text();

	return {
		markdown: markdown.toString(),
	}
}