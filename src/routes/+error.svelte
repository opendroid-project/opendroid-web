<script lang="ts">
	import { page } from '$app/stores';

	const errorMessage = $page.error ? $page.error.message : 'Unkniown';
</script>

<div id="container">
	<h4>{$page.status}: {errorMessage}</h4>
	<img src="https://http.dog/{$page.status}.jpg" alt="HTTP ERROR {$page.status}" />
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		vertical-align: center;
	}

	img {
		width: 60%;
	}
</style>
