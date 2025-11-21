import HomeView from "~/home/HomeView";

export function meta() {
  return [
    { title: "Ellty task-1 | Home" },
    { name: "description", content: "Welcome to Ellty task-1" },
  ];
}

export default function Home() {
  return <HomeView />;
}
