import { defineComponent } from "vue"

export const Hello=defineComponent({
    setup(){
        return ()=>{
            return (
                <>
                <A/>
                <B/>
                </>
            
            )
        }
    }
    
})
const A = ()=>{
    return <p>123456</p>
}
const B = defineComponent({
    setup(){
        return ()=>{
            return <p>我是B</p>
        }
    }
})