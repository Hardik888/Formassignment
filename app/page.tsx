"use client";
import { Provider } from "react-redux";
import Form from "./Component/Form/form";
import Hero from "./Component/Form/hero";
import Header from "./Component/Header/header";
import { store } from "./store/store";
import { useState } from "react";

export default function Home() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  return (
    <Provider store={store}>
      <main className="flex flex-col">
        <Header />
        <section className="flex ml-20 w-3/4">
          <div className="-mt-14 p-4">
            <Hero setProfilePicture={setProfilePicture} />
            <div className="-ml-1 -mt-36">
              <Form profilePicture={profilePicture} />
            </div>
          </div>
        </section>
      </main>
    </Provider>
  );
}
