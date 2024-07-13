<script>
	import SectionHeader from "../components/SectionHeader.svelte";
    import {getContext} from 'svelte';
	import ShadowText from "../components/ShadowText.svelte";

    const activeSection = getContext('activeSection');
    

</script>
<section id="intro" class="border-secondary-section-1 relative">
    <SectionHeader title="Gracjan Wojciechowski" />
    <div class="absolute text-secondary-section-1 text-8xl text-nowrap -translate-x-1/2 -translate-y-1/2 left-[50%] top-[50%]">
        <ShadowText text="Web Developer" />
    </div>
    

</section>

<section id="exp" class="border-secondary-section-2">
    <SectionHeader title="Experience" />
</section>
<section id="edu" class="border-secondary-section-3">
    <SectionHeader title="Education" />
</section>
<section id="pro" class="border-secondary-section-4">
    <SectionHeader title="Projects" />
</section>

<style>
	section {
		@apply h-screen w-full;
	}
</style>
