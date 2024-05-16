<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import type { PageData } from "./$types";

	export let data: PageData;

	import { copyText } from 'svelte-copy';
	import { browser } from '$app/environment';
	import { toast } from '@zerodevx/svelte-toast'

	if (browser) {
		document.addEventListener("click", copyCodeBlock);
	}
	async function copyCodeBlock(event: Event) {
		if (event.target.nodeName == "CODE"){
			copyText(event.target.innerText);
			toast.push("Copied!")
		}
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