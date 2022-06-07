import { TittleStyled, Subtittle } from "./Tittle.style";


interface TittleProps {
    tittle: string;
    subtittle?: string | JSX.Element;
}

export default function Tittle(props: TittleProps){
    return (
        <>
            <TittleStyled>{props.tittle}</TittleStyled>
            <Subtittle>{props.subtittle}</Subtittle>
        </>
    )
}