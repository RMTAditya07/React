export const Character = async (name) => {

const api="https://gateway.marvel.com:443"
let heroUrl = `${api}/v1/public/characters`;
let ts = Date.now().toString();
const hash="32bd7e54c057df65d5ff065a83ca1fa9"
const apiKey="de576865dbdd9fc8c9f37ff91d573293"

let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

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

    const api="https://gateway.marvel.com:443"
    let heroUrl = `${api}/v1/public/characters/${id}`;
    let ts = Date.now().toString();
    const hash="32bd7e54c057df65d5ff065a83ca1fa9"
    const apiKey="de576865dbdd9fc8c9f37ff91d573293"
    
    let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
    
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