<script>
	export let href = ''
	export let title = undefined
	export let text = ''
</script>

<style>
	img{
			display: block;
			max-width: 100%;
	}
</style>

<a href="{href}">
<img src={href} {title} alt={text}>
</a>