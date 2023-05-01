<script lang="ts">
    import '../app.css';
</script>

<slot />

<span class="md:bg-primary-200"></span>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
