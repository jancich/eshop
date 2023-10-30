import Image from "next/image";
import { TbSkateboarding } from 'react-icons/tb';

interface AvatarProps{
    src?: string | null | undefined
}


const Avatar: React.FC <AvatarProps> = ({src}) => {
    if(src){
    return(
        <Image
            src={src}
            alt="avatar"
            className="rounded-full"
            height="30"
            width="30"
        />
        );
    }    
        return <TbSkateboarding size={24}/>;
}
 
export default Avatar;