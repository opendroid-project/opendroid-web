<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let markdown;

	import { onMount } from 'svelte';
	import AnchorJS from 'anchor-js';
	import Toc from 'svelte-toc';
	import CodeRenderer from '$lib/CodeRenderer.svelte';
	import CodespanRenderer from '$lib/CodespanRenderer.svelte';

	onMount(() => {
		const anchors = new AnchorJS();
		anchors.add();
		anchors.add('h1');
	});
</script>

<div id="readability_container">
	<div id="markdown_container">
		<SvelteMarkdown source={markdown} renderers={{ code: CodeRenderer, codespan: CodespanRenderer}} />
	</div>
	<Toc --toc-mobile-bg="var(--lighter-color)" headingSelector=":is(h1,h2, h3, h4,h5,h6):not(.toc-exclude)"/>
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
