import FavoritesButton from "@/components/buttons/FavoritesButton/FavoritesButton";

export default function Home() {
  const backgroundColor = 'white';
  return (
    <main style={{ background: backgroundColor, height: "100vh", padding: "1rem" }}>
    <FavoritesButton amount={3} onClick={(ev)=>{console.log(ev)}} />
    </main>
  );
}
