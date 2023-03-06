import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from './Arow';

interface BackArrowProps {
  variant?: 'light' | 'dark';
}

export function BackArrow({ variant = "light" }: BackArrowProps ) {
  const navigate = useNavigate();

  function handleClick() {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/login', { replace: true });
    }
  }

  const styleVariants = {
    "light": "text-violet-500 hover:bg-violet-100",
    "dark": "text-white hover:bg-violet-700"
  }

  return (
    <button type="button" onClick={handleClick} className={`${styleVariants[variant]} px-2 rounded-lg w-fit transition-all`}>
      <ArrowIcon />
    </button>
  )
};