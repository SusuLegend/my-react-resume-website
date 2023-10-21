import "./animateletter.css";

const AnimatedLetter = ({ letterclass, strArray, idx }) => {
  return (
    <span className="xl:mr-12 lg:mr-8 md:mr-6">
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterclass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetter;
