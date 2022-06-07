import List from '../ui/components/List/List';
import Tittle from '../ui/components/Tittle/Tittle';

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    
      <div>
        <Tittle 
          tittle="" 
          subtittle={
            <span>
              Com um pequeno valor mensal, você <br />
              pode <strong>adotar um pet virtualmente</strong>
            </span>
          } />
  
        <List
          pets={listPets}
          onSelect={(pet) => setPetSelecionado(pet)}
        />
  ) </div>
}

export default Home
