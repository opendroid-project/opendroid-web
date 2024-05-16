<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import type { PageData } from "./$types";

	export let data: PageData;

</script>

<style>
	#markdown_container{
			padding: 10px;
	}
</style>

<div id="markdown_container">
<SvelteMarkdown source={data.markdown} />
</div>