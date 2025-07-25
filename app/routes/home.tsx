import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FitFinder" },
    { name: "description", content: "Welcome to resume analyzer powered by ai" },
  ];
}

export default function Home() {
  return (
    <main>
      hello
    </main>
  )
}
