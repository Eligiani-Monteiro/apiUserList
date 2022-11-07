import { Button } from '../Button'
import {CardUserStyle} from './styled'
type CardUserProps = {
    user:{
        name:{
            first:string,
            last:string,
        },
        picture:{
            medium: string
        },
        email: string
    },
    textButton:string
}
export function CardUser({user,textButton}:CardUserProps){
    return(
        <CardUserStyle>
            <img src={user.picture.medium}/>
            <div className='info'>
                <h3>{user.name.first}</h3>
                {user.email}
               <Button text={textButton}/>
            </div>
        </CardUserStyle>
            
        
    )
}
