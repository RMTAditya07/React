export const Events = async () => {

    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/events`;
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


export const EventById = async (eventId) => {

    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/events/${eventId}`;
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
  

export const Characters = async (eventId) => {

    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/events/${eventId}/characters`;
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
  
export const Creators = async (eventId) => {

    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/events/${eventId}/creators`;
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

export const Comics = async (eventId) => {

      const api="https://gateway.marvel.com"
      let heroUrl = `${api}/v1/public/events/${eventId}/comics`;
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

export const Stories = async (eventId) => {

      const api="https://gateway.marvel.com"
      let heroUrl = `${api}/v1/public/events/${eventId}/stories`;
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
export const Series = async (eventId) => {

      const api="https://gateway.marvel.com"
      let heroUrl = `${api}/v1/public/events/${eventId}/series`;
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