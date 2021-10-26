<script>
    import { onMount } from 'svelte';
    import butter from 'butter-js';

	export let name;

    onMount(async () => {
        butter.init({cancelOnTouch: true});
	});
</script>

<div id="butter">
    <div class="test-div white-div">
      <h1 class="test-heading black-heading">butter.js</h1>
    </div>
    <div class="test-div black-div">
      <h1 class="test-heading white-heading">butter.js</h1>
    </div>
    <div class="test-div white-div">
      <h1 class="test-heading black-heading">butter.js</h1>
    </div>
    <div class="test-div black-div">
      <h1 class="test-heading white-heading">butter.js</h1>
    </div>
    <div class="test-div white-div">
      <h1 class="test-heading black-heading">butter.js</h1>
    </div>
    <div class="test-div black-div">
      <h1 class="test-heading white-heading">butter.js</h1>
    </div>
    <div class="test-div white-div">
      <h1 class="test-heading black-heading">butter.js</h1>
    </div>
    <div class="test-div black-div">
      <h1 class="test-heading white-heading">butter.js</h1>
    </div>
 </div>

<style>
	.test-div {
        position: relative;
        width: 100%;
        height: 75vh;
    }
    .black-div {
        background-color: #000000;
    }
    .test-heading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
    .white-heading {
        color: #ffffff;
    }
</style>
