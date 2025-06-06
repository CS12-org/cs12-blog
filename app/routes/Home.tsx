import WeeklyChallenge from "~/components/Home/WeeklyChallenge";

function Home() {
  return (
    <div>
      <WeeklyChallenge />

      <div
        role="separator"
        className="h-[3px] bg-surface-0 my-5 rounded-full"
      />
    </div>
  );
}

export default Home;
