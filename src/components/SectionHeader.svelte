<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import ShadowText from './ShadowText.svelte';
	export let title;

	const activeSection = getContext<Writable<number>>('activeSection');
	let active = 0;
	activeSection.subscribe((value:number) => {
		active = value;
	});
</script>

<div
	class={'border-r-8 border-b-8 w-fit p-8 border-separate border-dashed border-inherit'} 
>
	<h1 class="text-6xl font-bold text-white"><ShadowText text={title}/></h1>
</div>
