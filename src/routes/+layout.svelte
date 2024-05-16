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
		footer {
				margin-top: auto;
				text-align: center;
				background-color: #222;
		}
		footer *{
				background-color: inherit;
		}

</style>

<slot></slot>

<footer>
	<p>
		Copyright © OpenDroid Contributors 2024 • All wiki content licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike</a> unless otherwise noted.
		<br>
		This website is licensed under <a href="https://www.gnu.org/licenses/old-licenses/lgpl-2.0.txt">GNU LGPLv2</a> • Source code available at <a href="https://github.com/opendroid-project/opendroid-web">https://github.com/opendroid-project/opendroid-web</a>
	</p>
</footer>