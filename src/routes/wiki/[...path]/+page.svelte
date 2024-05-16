<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import type { PageData } from "./$types";

	export let data: PageData;

	import { copyText } from 'svelte-copy';
	import { browser } from '$app/environment';

	if (browser) {
		document.addEventListener("click", copyCodeBlock);
	}
	async function copyCodeBlock(event: Event) {
		console.log(event.target);
		if ( event.target != null) copyText(event.target.innerText);
	}
</script>

<style>
	#markdown_container{
			padding: 10px;
	}
</style>

<div id="markdown_container">
<SvelteMarkdown source={data.markdown} />
</div>