<script lang="ts">
	import Contributor from '$lib/Contributor.svelte';
</script>

<div id="main">
	<h1>Welcome to NIOS Students</h1>
	<p>NIOS-Students is a project aiming to form a community of NIOS students.</p>
	<h2>Contributors:</h2>

	<div id="contributors">
		<Contributor
			name="SoundDrill"
			profile_picture="https://avatars.githubusercontent.com/u/84176052?v=4"
		/>
		<Contributor
			name="LinuxGuy312"
			profile_picture="https://avatars.githubusercontent.com/u/101087324?v=4"
		/>
		<Contributor
			name="PugzAreCute"
			profile_picture="https://avatars.githubusercontent.com/u/62641095?v=4"
		/>
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
