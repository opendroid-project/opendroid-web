<script lang="ts">
	import Contributor from '$lib/Contributor.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div id="main">
	<h1>Welcome to OpenDroid</h1>
	<p>Opendroid is a project aiming to make comprehensive android documentation.</p>
	<h2>Contributors:</h2>

	<div id="contributors">
		{#each data.jsonData.contributors as contributor}
			<Contributor
				name="{contributor.name}"
				profile_picture="{contributor.profile_picture}",
				profile_link="{contributor.profile_link}"
			/>
		{/each}
	</div>
</div>

<style>
	#main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}
	#contributors {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
