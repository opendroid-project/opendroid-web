<script lang="ts">
	import '../app.css'
</script>

<nav>
	<a href="/contact">Contact</a>
	<a href="/wiki">Wiki</a>
	<a href="/">Home</a>
</nav>

<style>
    nav {
        border-bottom: 2px solid white;
				padding: 10px;
				display: flex;
				flex-direction: row-reverse;
    }
		nav a {
				padding: 5px;
				border-radius: var(--border-radius);
				border: 2px solid darkgoldenrod;
				margin-left: 2px;
				margin-right: 2px;
				text-decoration: none;
        transition-duration: var(--transition-duration);

    }
		nav a:hover{
				transform: scale(1.1);
				transition-duration: var(--transition-duration);
		}

</style>

<slot></slot>