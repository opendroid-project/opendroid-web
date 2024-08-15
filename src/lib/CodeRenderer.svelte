<script>
	import { copySiblingCode } from './CopyUtils';

	export let lang
	export let text
	let fixed_text=text.replace(/&quot;/g,'"');
</script>

<style>
	button{
			display: inline-block;
	}
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
  pre {
      display: grid;
      grid-template-columns: auto 30px;
  }
	button{
			grid-row: 1;
			grid-column: 2;
			width: 100%;
			padding: 0;
			margin-left: 2px;
			height: 100%;
      background-color: var(--lightest-color);
      color: #f7f7f7;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border: none;
      border-radius: 2px var(--border-radius) var(--border-radius) 2px;

  }
	button:active{
			background-color: #2B2B2B;
	}
</style>

<pre class={lang}>
<code>{fixed_text}
</code>
<button use:copySiblingCode>
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
</button>
</pre>