<script>
	export let lang
	export let text

	let fixed_text=new DOMParser().parseFromString(text, "text/html").documentElement.textContent
</script>

<style>
    code{
        margin: 0;
        background-color: var(--lightest-color);
        padding: 3px;
        border-radius: var(--border-radius) 2px 2px var(--border-radius);
        font-family: var(--mono-font), monospace;
        vertical-align: middle;
        color: #f7f7f7;
        overflow-x: auto;
        scrollbar-width: var(--scrollbar-width);
        scrollbar-color: var(--scrollbar-color);
    }
    div {
        display: inline;
    }
</style>

<div class={lang}>
<code>{fixed_text}
</code>
</div>