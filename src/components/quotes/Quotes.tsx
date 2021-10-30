import { Button } from '../../components';
import * as C from './style';

type QuotesProps = {
    quote: string,
    speaker: string,
    onUpdate: () => void
};

export const Quotes = ({ quote, speaker, onUpdate }: QuotesProps) => {
    return (
        <C.Wrapper>
            <figure>
                <blockquote cite="">
                    <C.Quote>
                        "{quote}"
                    </C.Quote>
                </blockquote>
                <C.Speaker>- {speaker}</C.Speaker>
            </figure>
            <Button onClick={onUpdate}>
                New Quote
            </Button>
        </C.Wrapper>
    );
};