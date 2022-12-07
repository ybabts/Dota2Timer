import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { HeroPortrait } from '../components/HeroPortrait.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dota 2 Timer</title>
      </Head>
      <body class="bg-gray-900">
        <div class="p-4 mx-auto max-w-screen-xl bg-gray-800 mt-5">
          <h1 class="text-white font-sans font-bold text-center">Dota 2 Timers</h1>
          <HeroPortrait />
          <HeroPortrait />
          <HeroPortrait />
          <HeroPortrait />
          <HeroPortrait />
        </div>
      </body>
      
    </>
  );
}
