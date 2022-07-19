import { ReactComponent as Logo } from 'assets/favicon.svg';
import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      //  ${import.meta.env.VITE_PIXABAY_API_KEY}
      `https://pixabay.com/api/?key=21006895-bfaaa89652a3d7d5175478097&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="App">
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Button onClick={() => alert('hola')}>Heyo</Button>
    </div>
  );
}

export default App;
