<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { copyText } from 'svelte-copy';
	import { browser } from '$app/environment';
	import { toast } from '@zerodevx/svelte-toast';
	import { onMount } from 'svelte';
	import AnchorJS from 'anchor-js';
	import WebRenderComponent from '$lib/WebRenderComponent.svelte';

	if (browser) {
		document.addEventListener('click', copyCodeBlock);
	}
	async function copyCodeBlock(event: Event) {
		if (event.target.nodeName == 'CODE') {
			copyText(event.target.innerText);
		}
	}

	onMount(() => {
		const anchors = new AnchorJS();
		anchors.add();
		anchors.add('h1');
	});
</script>
<WebRenderComponent markdown="{data.markdown}" />