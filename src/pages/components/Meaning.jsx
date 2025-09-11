const Meaning = ({ data, fetchDictionary }) => {
  const { meanings } = data;
  return (
    <div>
      {meanings.map((speech, index) => {
        return (
          <MeaningItem
            speech={speech}
            key={index}
            fetchDictionary={fetchDictionary}
          />
        );
      })}
    </div>
  );
};

const MeaningItem = ({ speech, fetchDictionary }) => {
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
      <MeaningItems
        meaning={synonyms}
        meaningType="Synonyms"
        fetchDictionary={fetchDictionary}
      />
      <MeaningItems
        meaning={antonyms}
        meaningType="Antonyms"
        fetchDictionary={fetchDictionary}
      />
      <hr />
    </div>
  );
};

const MeaningItems = ({ meaning, meaningType, fetchDictionary }) => {
  return (
    <>
      {meaning && meaning.length > 0 && (
        <div>
          <p>{meaningType}</p>
          <div>
            {meaning.map((mean, index) => {
              return (
                <button onClick={() => fetchDictionary(mean)} key={index}>
                  {" "}
                  {mean}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Meaning;
