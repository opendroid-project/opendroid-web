export async function load({ params }) {
	const contributors_json = `https://raw.githubusercontent.com/opendroid-project/docs/master/contributors.json`;

	const contributorsFetch = await fetch(contributors_json);

	const contributors = await contributorsFetch.text();

	return {
		jsonData: JSON.parse(contributors.toString())
	};
}
