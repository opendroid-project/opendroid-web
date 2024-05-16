<script lang="ts">
	export let name = ""
	export let profile_picture = ""
</script>

<div class="profile_picture_container">
	<img src={profile_picture} alt="Picture of {name}">
	<p>{name}</p>
</div>

<style>
	.profile_picture_container{
			display: flex;
			width: 10%;
			flex-direction: column;
			align-items: center;
			justify-items: center;
      gap: 1px;
  }
	.profile_picture_container img {
			width: 100%;
			border-radius: 10px;
	}
</style>