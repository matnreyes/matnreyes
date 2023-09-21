import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Matt Reyes - Official Site" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="bg-blue-950 text-white h-[20vh] flex items-center px-8">
        <div className="max-w-[50vw]">
          <h1 className="font-light text-4xl font-sans">Hey, I'm Matt!</h1>
          <h2>I'm a full stack developer passionate about finding efficient and creative solutions to everyday problems</h2>
        </div>
        <div>
          image here
        </div>
      </div>
    </div>
  );
}
