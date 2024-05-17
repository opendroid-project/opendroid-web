<script lang="ts">
	export let name = '';
	export let profile_picture = '';
</script>

<div class="profile_picture_container">
	<img src={profile_picture} alt="Picture of {name}" />
	<p>{name}</p>
</div>

<style>
	.profile_picture_container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
			margin: 20px;
	}
	.profile_picture_container img {
		width: 50px;
		border-radius: var(--border-radius);
		transition-duration: var(--transition-duration);
	}
	.profile_picture_container img:hover {
		transform: scale(1.1);
		transition-duration: var(--transition-duration);
	}
</style>
