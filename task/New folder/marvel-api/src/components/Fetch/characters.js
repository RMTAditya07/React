export const Character = async () => {

    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/characters`;
    const hash="32bd7e54c057df65d5ff065a83ca1fa9"
    const apiKey="de576865dbdd9fc8c9f37ff91d573293"
    
    let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
        
      } catch (err) {
        console.error(err);
        return;
      }
    };

export const CharacterById = async (id) => {

    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/characters/${id}`;
    const hash="32bd7e54c057df65d5ff065a83ca1fa9"
    const apiKey="de576865dbdd9fc8c9f37ff91d573293"
    
    let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
      } catch (err) {
        console.error(err);
        return;
      }
    };
  
export const Comics = async () => {

    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/characters/1011334/comics`;
    const hash="32bd7e54c057df65d5ff065a83ca1fa9"
    const apiKey="de576865dbdd9fc8c9f37ff91d573293"
    
    let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
       return data;
     
      } catch (err) {
        console.error(err);
        return;
      }
    };

export const Events = async () => {

      const api="https://gateway.marvel.com"
      let heroUrl = `${api}/v1/public/characters/1011334/events`;
      const hash="32bd7e54c057df65d5ff065a83ca1fa9"
      const apiKey="de576865dbdd9fc8c9f37ff91d573293"
      
      let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
      try {
          let response = await fetch(url);
          let data = await response.json();
          console.log(data);
          return data;
        } catch (err) {
          console.error(err);
          return;
        }
      };

export const Series = async () => {

      const api="https://gateway.marvel.com"
      let heroUrl = `${api}/v1/public/characters/1011334/series`;
      const hash="32bd7e54c057df65d5ff065a83ca1fa9"
      const apiKey="de576865dbdd9fc8c9f37ff91d573293"
      
      let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
      try {
          let response = await fetch(url);
          let data = await response.json();
          console.log(data);
          return data;
        } catch (err) {
          console.error(err);
          return;
        }
      };

export const Stories = async () => {

      const api="https://gateway.marvel.com"
      let heroUrl = `${api}/v1/public/characters/1011334/stories`;
      const hash="32bd7e54c057df65d5ff065a83ca1fa9"
      const apiKey="de576865dbdd9fc8c9f37ff91d573293"
      
      let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
      try {
          let response = await fetch(url);
          let data = await response.json();
          console.log(data);
          return data;
        } catch (err) {
          console.error(err);
          return;
        }
      };