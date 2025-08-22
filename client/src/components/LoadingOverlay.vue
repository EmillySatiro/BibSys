<template>
	<div v-if="visible" class="loading-overlay">
		<div class="spinner"></div>
		<p>{{ text }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	visible: boolean; // controla se aparece ou não
	text?: string; // texto opcional
}>();
</script>

<style scoped>
.loading-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 18px;
	z-index: 9999;
}

.spinner {
	width: 50px;
	height: 50px;
	border: 6px solid #ccc;
	border-top-color: #42b983;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
