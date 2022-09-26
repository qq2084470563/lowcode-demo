import {defineComponent} from 'vue'
export const component01 = () => {
	return <Button text={'hello'} />
}
const Button = defineComponent({
	props: {
		text: {
			type: String,
		},
	},
	setup({ text }) {
		return () => <button>{text}</button>
	},
})