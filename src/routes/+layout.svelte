<script lang="ts">
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import HamburgerNavBar from '$lib/HamburgerNavBar.svelte';
	import DesktopNavigation from '$lib/DesktopNavigation.svelte';
	import { browser } from '$app/environment';
	let minWidth = false;
	if (browser) {
		minWidth = window.matchMedia('(min-width: 500px)').matches;
	}
	let innerWidth = 0
	let innerHeight = 0
	$: useSmallNav = innerWidth >= 500

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<SvelteToast />

{#if useSmallNav}
	<DesktopNavigation />
{:else}
	<HamburgerNavBar />
{/if}

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
	footer {
		margin-top: auto;
		text-align: center;
		border-top: 2px solid var(--text-color);
	}
</style>
