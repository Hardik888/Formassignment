"use client";
import { Provider } from "react-redux";
import Form from "./Component/Form/form";
import Hero from "./Component/Form/hero";
import Header from "./Component/Header/header";
import { store } from "./Redux-Store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex flex-col   ">
        <Header />
        <section className="flex ml-20  w-3/4  ">
          <div className=" -mt-14 p-4 ">
            <Hero />
            <div className="-ml-1 -mt-36 ">
              <Form />
            </div>
          </div>
        </section>
      </main>
    </Provider>
  );
}
