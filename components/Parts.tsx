import AudioText from "./AudioText";

function Parts() {
  return (
    <div className="flex flex-col gap-5">
      <AudioText
        question="Who are you?"
        answer="Tuc kon o ??"
        voice="/who.mp3"
      />
      <AudioText
        question="How are you?"
        answer=" Kimeo o tuc??"
        voice="/how.mp3"
      />
    </div>
  );
}

export default Parts;
