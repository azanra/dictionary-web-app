const Meaning = ({ data }) => {
  const { meanings } = data;
  return (
    <div>
      {meanings.map((speech, index) => {
        return <MeaningItem speech={speech} key={index} />;
      })}
    </div>
  );
};

const MeaningItem = ({ speech }) => {
  const { partOfSpeech, definitions, synonyms, antonyms } = speech;
  return (
    <div>
      <div>
        <h1>{partOfSpeech}</h1>
        <hr />
      </div>
      <p>Meaning</p>
      <div>
        <ul>
          {definitions.map((definition, index) => {
            const { definition: def, example } = definition;
            return (
              <li key={index}>
                <p>{def}</p>
                {example && <p>{example}</p>}
              </li>
            );
          })}
        </ul>
      </div>
      <MeaningItems meaning={synonyms} meaningType="Synonyms" />
      <MeaningItems meaning={antonyms} meaningType="Antonyms" />
      <hr />
    </div>
  );
};

const MeaningItems = ({ meaning, meaningType }) => {
  return (
    <>
      {meaning && meaning.length > 0 && (
        <div>
          <p>{meaningType}</p>
          <div>
            {meaning.map((mean, index) => {
              return <button key={index}> {mean}</button>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Meaning;
