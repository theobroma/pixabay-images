// import { ReactComponent as Logo } from 'assets/favicon.svg';
// import { Button } from 'components/Button';
// import { Header } from 'components/Header';
import { ImageCard } from 'components/ImageCard';
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState<any[]>([]);
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
      {/* <Header title="hola" /> */}
      {/* <Logo height={100} width={100} /> */}
      {/* <Button onClick={() => alert('hola')}>Heyo</Button> */}
      <div className="container mx-auto my-5">
        {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}

        {!isLoading && images.length === 0 && (
          <h1 className="mx-auto mt-32 text-center text-5xl">No Images Found</h1>
        )}

        {isLoading ? (
          <h1 className="mx-auto mt-32 text-center text-6xl">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} hit={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
