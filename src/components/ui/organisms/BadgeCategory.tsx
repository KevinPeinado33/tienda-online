import { Badge } from 'react-bootstrap';

interface Props {
    title:       string;
    idCategory:  number;
    isSelected:  number;
    setCategory: ( value: number ) => void;
}

export const BadCategory = ( { title, idCategory, isSelected, setCategory }: Props ) => (
    <Badge 
        style={{ marginRight: 10, cursor: 'pointer' }}
        onClick={ () => setCategory( idCategory ) } 
        pill 
        bg={
            ( isSelected === idCategory ) 
                ? 'secondary'
                : 'dark'
        } >
            { title }
    </Badge>
)
