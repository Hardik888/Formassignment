import Form from "./Component/Form/form";
import Hero from "./Component/Form/hero";
import Header from "./Component/Header/header";

export default function Home() {
  return (
    <main className="flex min-h-screen -mt-1 flex-col">
      <Header />
      <Hero />
      <Form />
    </main>
  );
}
