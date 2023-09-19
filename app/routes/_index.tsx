import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="bg-blue-950 text-white h-[20vh] flex justify-center items-center">
        <h1 className="font-light text-4xl font-sans">Matt Reyes</h1>
        <h2>Efficient, detailed, and diverse</h2>
      </div>
    </div>
  );
}
