export function CharactersIndex(props) {
  return (
    <div>
      <h1>All Characters</h1>
      {props.characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.url} />
          <p> {character.description} </p>
        </div>
      ))}
    </div>
  );
}
