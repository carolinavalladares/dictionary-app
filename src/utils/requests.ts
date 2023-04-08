export async function getWord(word: string) {
  const resp = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const data = await resp.json();

  console.log(data);
  console.log(resp);

  return data[0];
}
