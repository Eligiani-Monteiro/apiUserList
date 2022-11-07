import { ButtonStyle } from "./styled"

type ButtonProps = {
    text:string
}

export function Button({text}:ButtonProps){
    return (
       <ButtonStyle bg="#a82674">
        {text}
       </ButtonStyle>
    )
}