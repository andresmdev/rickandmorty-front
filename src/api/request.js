export async function getAllCharactersData() {
  let results = await fetch('http://localhost:3001/api/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      query: `{
        characters {
          id
          name
          status
        }
      }`
    })
  })

  let characters = await results.json();
  console.log(characters.data.characters)
  return characters.data.characters;
}


export async function getCharacterByIdData(id) {
  let results = await fetch('http://localhost:3001/api/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      query: `{
        character (id: ${id}) {
          id
          name
          status
          gender
        }
      }`
    })
  })

  let character = await results.json();
  console.log(character.data.character)
  return character.data.character;
}