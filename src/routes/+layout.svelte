<script lang="ts">
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<SvelteToast />

<nav>
	<a href="/contact">Contact</a>
	<a href="/wiki">Wiki</a>
	<a href="/">Home</a>
	<div id="nostyle"></div>
	<a href="/" id="odroidlogo">OpenDroid</a>
</nav>

<slot></slot>

<footer>
	<p>
		Copyright © OpenDroid Contributors 2024 • All wiki content licensed under <a
			href="https://creativecommons.org/licenses/by-sa/4.0/"
			>Creative Commons Attribution-ShareAlike</a
		>
		unless otherwise noted.
		<br />
		This website is licensed under
		<a href="https://www.gnu.org/licenses/old-licenses/lgpl-2.0.txt">GNU LGPLv2</a>
		• <a href="https://github.com/opendroid-project/opendroid-web">Source Code</a>
	</p>
</footer>

<style>
	nav {
		border-bottom: 2px solid ivory;
		padding: 10px;
		display: flex;
		flex-direction: row-reverse;
	}
	#odroidlogo {
		float: left;
		border: none;
		font-size: 1em;
	}
	#nostyle {
		flex-grow: 100;
		border: none;
	}
	nav a {
		padding: 5px;
		border-radius: var(--border-radius);
		margin: 3px;
		text-decoration: none;
		transition-duration: var(--transition-duration);
		border-bottom: 3px solid transparent;
	}
	nav a:hover {
		border-bottom: 3px solid darkgoldenrod;
		transition-duration: var(--transition-duration);
	}
	footer {
		margin-top: auto;
		text-align: center;
		border-top: 2px solid ivory;
	}
</style>
