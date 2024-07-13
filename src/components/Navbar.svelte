<script lang="ts">
	import { Router, Link } from 'svelte-routing';
	import { getContext, setContext } from 'svelte';
	import { type Writable } from 'svelte/store';

	let active = 0;
	let activeSection = getContext<Writable<number>>('activeSection')

	activeSection.subscribe((value:number) => {
		active = value;
	});

	let setActivePage = (page:number) => {
		activeSection.set(page);
		setContext('activeSection', activeSection);
	};
</script>


<nav
	class={`flex flex-col h-full border-l-[1rem] justify-around  transition ease-in-out duration-500 ` +
		(active == 0
			? 'border-secondary-section-1 bg-secondary-section-1 bg-opacity-40'
			: active == 1
				? 'border-secondary-section-2 bg-secondary-section-2 bg-opacity-40'
				: active == 2
					? 'border-secondary-section-3 bg-secondary-section-3 bg-opacity-40'
					: active == 3
						? 'border-secondary-section-4 bg-secondary-section-4 bg-opacity-40'
						: '')}
>
	<a href="#intro" on:click={() => setActivePage(0)} class="navLink">
		<div class="navLinkContent" class:selected1={active === 0}>Intro</div>
	</a>
	<a href="#exp" on:click={() => setActivePage(1)} class="navLink">
		<div class="navLinkContent" class:selected2={active === 1}>Experience</div>
	</a>
	<a href="#edu" on:click={() => setActivePage(2)} class="navLink">
		<div class="navLinkContent" class:selected3={active === 2}>Education</div>
	</a>
	<a href="#pro" on:click={() => setActivePage(3)} class="navLink">
		<div class="navLinkContent" class:selected4={active === 3}>Projects</div>
	</a>
</nav>

<style>
	.selected1 {
		@apply bg-secondary-section-1;
		color: #101010;
	}
	.selected2 {
		@apply bg-secondary-section-2;
		color: #101010;
	}
	.selected3 {
		@apply bg-secondary-section-3;
		color: #101010;
	}
	.selected4 {
		@apply bg-secondary-section-4;
		color: #101010;
	}
	.navLinkContent {
		@apply text-2xl font-bold flex flex-row justify-center items-center h-full p-8;
		@apply transition-colors duration-300;
	}
	.navLink {
		@apply grow text-white font-bold;
	}
</style>
