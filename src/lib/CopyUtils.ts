import { copyText } from 'svelte-copy';
import { toast } from '@zerodevx/svelte-toast';

export function copySiblingCode(node: Node) {
	function handleClick(){
		const siblings = node.parentElement.children;
		for (let i = 0; i < siblings.length; i++) {
			if(siblings[i].tagName == "CODE"){
				copyText(<string>siblings[i].textContent);
				toast.push("Copied!")
				break
			}
		}
	}
	node.addEventListener("click", handleClick)
	return {
		destroy() {
			node.removeEventListener("click", handleClick);
		}
	};
}