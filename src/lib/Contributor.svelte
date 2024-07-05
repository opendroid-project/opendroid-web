<script lang="ts">
	export let name;
	export let profile_picture;
	export let profile_link;
</script>

<a class="profile_picture_container" href="{profile_link}">
	<img src={profile_picture} alt="Picture of {name}" />
	<p>{name}</p>
</a>

<style>
	.profile_picture_container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		margin: 20px;
			text-decoration: none;
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
