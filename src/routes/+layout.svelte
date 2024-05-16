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
        border-bottom: 2px solid black;
				padding: 10px;
				display: flex;
				flex-direction: row-reverse;
    }
		nav a {
				padding: 5px;
				border-radius: 3px;
				border: 2px solid darkgoldenrod;
				margin-left: 2px;
				margin-right: 2px;
				text-decoration: none;
				color: black;
        transition-duration: 250ms;

    }
		nav a:hover{
				transform: scale(1.1);
				transition-duration: 250ms;
		}

</style>

<slot></slot>