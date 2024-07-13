<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import '@fontsource/source-code-pro';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	const activeSection = writable(0);

	setContext('activeSection', activeSection);

</script>

<div class="flex flex-row-reverse h-full overflow-hidden scroll-smooth ">
	<Navbar/>
	<main class="scroll-smooth grow overflow-hidden">
		<slot />
	</main>
</div>
<style>
</style>
