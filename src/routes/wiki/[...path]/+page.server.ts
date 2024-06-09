export async function load({ params }) {
	const wiki_doc = `https://raw.githubusercontent.com/nios-students/docs/master/wiki/${params.path}.md`;

	const markdownFetch = await fetch(wiki_doc);

	const markdown = await markdownFetch.text();

	return {
		markdown: markdown.toString()
	};
}
