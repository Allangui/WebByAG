<template>
		<div class="animate">
			<div class="word">
                <span>B</span><span>i</span><span>e</span><span>n</span><span>v</span><span>e</span><span>n</span><span>u</span><span>e</span>&nbsp;
            </div>
			<div class="word">
                <span>s</span><span>u</span><span>r</span>&nbsp;
            </div>
            <div class="word">
                <span>m</span><span>o</span><span>n</span>&nbsp;
            </div>
            <div class="word">
                <span>p</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span>&nbsp;<span>!</span>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.animate {
    font-size: clamp(1.8rem,4vw,4rem);
    color: var(--light-slate);
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    .word{
        display: flex;
        flex-wrap: nowrap;
        span{
            display: inline-block;
            color: var(--light-slate);
	        opacity: 0;
	        transform: translate(-300px, 0) scale(0);
	        animation: sideSlide 1s forwards;
        }
    }
    .word:nth-of-type(1){
        span:nth-of-type(2) {
            animation-delay: .05s;
        }
        span:nth-of-type(3) {
            animation-delay: .1s;
        }
        span:nth-of-type(4) {
            animation-delay: .15s;
        }
        span:nth-of-type(5) {
            animation-delay: .2s;
        }
        span:nth-of-type(6) {
            animation-delay: .25s;
        }
        span:nth-of-type(7) {
            animation-delay: .3s;
        }
        span:nth-of-type(8) {
            animation-delay: .35s;
        }
        span:nth-of-type(9) {
            animation-delay: .4s;
        }
    }
    .word:nth-of-type(2){
        span:nth-of-type(1) {
            animation-delay: .45s;
        }
        span:nth-of-type(2) {
            animation-delay: .5s;
        }
        span:nth-of-type(3) {
            animation-delay: .55s;
        }
    }
    .word:nth-of-type(3){
        span:nth-of-type(1) {
            animation-delay: .6s;
        }
        span:nth-of-type(2) {
            animation-delay: .65s;
        }
        span:nth-of-type(3) {
            animation-delay: .7s;
        }
    }
    .word:nth-of-type(4){
        span:nth-of-type(1) {
            animation-delay: .75s;
        }
        span:nth-of-type(2) {
            animation-delay: .8s;
        }
        span:nth-of-type(3) {
            animation-delay: .85s;
        }
        span:nth-of-type(4) {
            animation-delay: .9s;
        }
        span:nth-of-type(5) {
            animation-delay: .95s;
        }
        span:nth-of-type(6) {
            animation-delay: 1s;
        }
        span:nth-of-type(7) {
            animation-delay: 1.05s;
        }
        span:nth-of-type(8) {
            animation-delay: 1.10s;
        }
        span:nth-of-type(9) {
            animation-delay: 1.15s;
        }
        span:nth-of-type(10) {
            animation-delay: 1.20s;
        }
        span:nth-of-type(11) {
            animation-delay: 1.25s;
        }
    }
}

@keyframes sideSlide {
	60% {
		transform: translate(20px, 0) scale(1);
		color: var(--light-slate);
	}

	80% {
		transform: translate(20px, 0) scale(1);
		color: var(--light-slate);
	}

	99% {
		transform: translate(0) scale(1.2);
		color: var(--green);
	}

	100% {
		transform: translate(0) scale(1);
		opacity: 1;
		color: var(--light-slate);
	}
}

</style>