<script lang="ts">
    import { classNames } from '$lib/utils';
    import { Icon } from '.';

    interface Option {
        value: any;
        show: string;
        type?: 'icon' | 'text';
    }

    export let options: Option[] = [];
    export let selected: any = '';
    export let selectOption: (selected: any) => void = _ => {};
</script>

<div
    class="bg-light-400 text-light-600 grid font-medium rounded-xl text-base"
    style="grid-template-columns: repeat({options.length}, minmax(0, 1fr))"
>
    {#each options as option}
        <button
            on:click={() => selectOption(option.value)}
            class={classNames(
                'px-2 rounded-xl transition-colors duration-300',
                option.value === selected && 'bg-light-100 text-dark-800'
            )}
        >
            {#if option.type === 'icon'}
                <i class="h-6 flex justify-center items-center">
                    <Icon path={option.show} />
                </i>
            {:else}
                <span>{option.show}</span>
            {/if}
        </button>
    {/each}
</div>
