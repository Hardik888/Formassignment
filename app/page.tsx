import Form from "./Component/Form/form";
import Hero from "./Component/Form/hero";
import Header from "./Component/Header/header";

export default function Home() {
  return (
    <main className="flex flex-col  ">
      <Header />
      <section className="ml-24 w-2/4  ">
        <div className="ml-1 -mt-14  ">
          <Hero />
          <Form />
        </div>
      </section>
    </main>
  );
}
