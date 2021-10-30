import { useEffect, useRef, useState } from 'react';
import { Quotes } from '../../components'
import * as C from './style';
import { getQuote } from '../../services';
import characterImg from '../../assets/images/michael-scott.png'

const paperSound = require('../../assets/sounds/sound_paper.mp3');
const audio = new Audio(paperSound.default);

export const App = () => {

  // Para resolver problema de definir stade de componente unmounted
  const isMounted = useRef(true);

  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }
  }, []);

  const onUpdate = async () => {
    const quote = await getQuote();

    if (isMounted.current) {
      audio.play();

      const speakerName = `${quote.data.character.firstname} ${quote.data.character.lastname}`;
      setCharacter(speakerName);

      setQuote(quote.data.content);
    }
  }

  return (
    <C.Container>
      <Quotes
        quote={quote}
        speaker={character}
        onUpdate={onUpdate}
      />
      <C.CharacterImage src={characterImg} alt={character} />
    </C.Container>
  );
}