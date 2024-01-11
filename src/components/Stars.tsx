import Star from './Star';
import './Stars.css'

type Props = {
    count: number,
}

export default function Stars({count = 0}: Props) {
    if (count < 1 || count > 5 || typeof count !== 'number') {
        return;
    }

    const stars = [];
    const star = <Star />

    for (let i = 0; i < count; i++) {
        stars.push(star);
    }
    
    return (
        <ul className="card-body-stars u-clearfix">
            {stars}
        </ul>
    )
}