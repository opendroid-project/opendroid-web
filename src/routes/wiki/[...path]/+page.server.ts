export async function load({ params }) {
	const wiki_doc = `https://opendroid-docs-cdn.pugzarecute.com/wiki/${params.path}.md`;

	const markdownFetch = await fetch(wiki_doc);

	const markdown = await markdownFetch.text();

	return {
		markdown: markdown.toString()
	};
}
