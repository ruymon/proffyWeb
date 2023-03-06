import { useNavigate } from 'react-router-dom';
import arrow from './../assets/arrow.svg';

export function BackArrow() {
    const navigate = useNavigate();

    function handleClick() {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/login', { replace: true });
        }
    }

    return (
        <button type="button" onClick={handleClick} className='text-violet-500 p-2 rounded-lg hover:bg-violet-100 w-fit transition-all'>
            <img src={arrow} alt="Voltar"/>
        </button>
    )
};