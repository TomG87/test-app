import { CharactersIndex } from "./CharactersIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import md5 from "md5"; // Import the md5 package

export function Content() {
  const [characters, setCharacters] = useState([]);
  const publicKey = "";
  const privateKey = "";
  const timestamp = Math.floor(Date.now() / 1000);

  // Calculate the MD5 hash using md5 package
  const concatenatedString = `${timestamp}${privateKey}${publicKey}`;
  const hash = md5(concatenatedString);

  const handleIndexCharacters = () => {
    console.log("handleIndexCharacters");
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      )
      .then((response) => {
        console.log(response.data); // Log the API response
        setCharacters(response.data.data.results); // Assuming 'results' contains the characters array
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  useEffect(handleIndexCharacters, []);

  return (
    <div>
      <CharactersIndex characters={characters} />
    </div>
  );
}
