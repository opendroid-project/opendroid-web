export async function load() {
	const wiki_doc = `https://raw.githubusercontent.com/nios-students/docs/master/wiki.md`;

	const markdownFetch = await fetch(wiki_doc);

	const markdown = await markdownFetch.text();

	return {
		markdown: markdown.toString()
	};
}
