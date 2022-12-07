import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function HeroPortrait(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="border(gray-100 2) hover:bg-gray-200 w-[15%] h-24 inline-block m-7"
    >
      <h3 class="text-center text-white w-1 block p-[4%]">
        Hero Name
      </h3>
    </div>
  );
}
