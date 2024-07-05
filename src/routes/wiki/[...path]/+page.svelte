<script lang="ts">
	import type { PageData } from './$types';
	import WebRenderComponent from '$lib/WebRenderComponent.svelte';

	export let data: PageData;
</script>
<WebRenderComponent markdown="{data.markdown}" />
