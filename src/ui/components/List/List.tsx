import { Button } from '@mui/material';
import { TextService } from '../../../data/services/TextService';
import { Pet } from './../../../data/@types/Pet';
import { Descricao, Foto, Info, ItemList, ListStyled, Nome } from './List.style';



interface ListProps {
  pets: Pet[];
}

export default function List(props: ListProps) {
  const tamanhoMaximoTexto = 200;

  return (
    <ListStyled>
      {props.pets.map((pet) => (
        <ItemList key={pet.id}>
          <Foto src={pet.foto} alt={pet.nome} />
          <Info>
            <Nome>{pet.nome}</Nome>
            <Descricao>
              {TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)}
            </Descricao>
            <Button variant={"contained"} fullWidth>
              Adotar
            {pet.nome}</Button>
          </Info>
        </ItemList>
      ))}
    </ListStyled>
  )
}
