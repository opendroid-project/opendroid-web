<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import type { PageData } from './$types';

	export let data: PageData;

	import { copyText } from 'svelte-copy';
	import { browser } from '$app/environment';
	import { toast } from '@zerodevx/svelte-toast';
	import { onMount } from 'svelte';
	import AnchorJS from 'anchor-js';
	import Toc from 'svelte-toc';

	if (browser) {
		document.addEventListener('click', copyCodeBlock);
	}
	async function copyCodeBlock(event: Event) {
		if (event.target.nodeName == 'CODE') {
			copyText(event.target.innerText);
			toast.push('Copied!');
		}
	}

	onMount(() => {
		const anchors = new AnchorJS();
		anchors.add();
		anchors.add('h1');
		toast.push('Click on code blocks to copy.');
	});
</script>

<div id="readability_container">
	<div id="markdown_container">
		<SvelteMarkdown source={data.markdown} />
	</div>
	<Toc --toc-mobile-bg="var(--lighter-color)" />
</div>

<style>
	#markdown_container {
		padding: 20px;
	}
	@media only screen and (min-width: 910px) {
		#readability_container {
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		#markdown_container {
			width: 60vw;
		}
	}
</style>
