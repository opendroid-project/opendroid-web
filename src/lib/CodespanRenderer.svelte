<script>
	export let lang
	export let text

</script>

<style>
    code{
        margin: 0;
        background-color: var(--lightest-color);
        padding: 10px;
        border-radius: var(--border-radius) 2px 2px var(--border-radius);
        font-family: var(--mono-font), monospace;
        vertical-align: middle;
        color: #f7f7f7;
        overflow-x: auto;
        scrollbar-width: var(--scrollbar-width);
        scrollbar-color: var(--scrollbar-color);
    }
    div {
        display: inline-grid;
        grid-template-columns: auto 30px;
				margin: 3px;
    }
</style>

<div class={lang}>
<code>{text}
</code>
</div>