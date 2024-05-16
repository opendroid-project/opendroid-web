<script lang="ts">
	import Contributor from './Contributor.svelte';
</script>
<div class="flex flex-center flex-col">
<h1>Welcome to OpenDroid</h1>
<p>Opendroid is a project aiming to make comprehensive android documentation.</p>
<h2> Contributors to OpenDroid: </h2>

<div class="flex flex-row flex-contributors">
<Contributor name="SoundDrill" profile_picture="https://avatars.githubusercontent.com/u/84176052?v=4" />
<Contributor name="PugzAreCute" profile_picture="https://avatars.githubusercontent.com/u/62641095?v=4" />
</div>
</div>
<style>
.flex{
		display: flex;
		gap: 1%;
}
.flex-row{
		flex-direction: row;
}
.flex-center{
		justify-content: center;
		align-items: center;
}
.flex-col{
		flex-direction: column;
}
</style>