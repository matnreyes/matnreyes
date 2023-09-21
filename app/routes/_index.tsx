import type { MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react'
import memoji from '~/assets/33964b1296d2579d7a3932f465052c06-sticker.png'

export const meta: MetaFunction = () => {
  return [
    { title: "Matt Reyes - Official Site" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="bg-iris3 text-iris12 h-[20vh] flex items-center px-8">
        <div className="max-w-[50vw]">
          <h1 className="font-light text-4xl font-sans">Hey, I'm Matt!</h1>
          <h2>I'm a full stack developer passionate about finding efficient and creative solutions to everyday problems</h2>
          <ul>
            <li>
              <Link to="https://github.com/matnreyes" target="_blank">Github</Link>
            </li>
            <li>
              <Link to="https://linkedin.com/in/matnreyes" target="_blank">LinkedIn</Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={memoji} className="max-h-[18vh]"/>
        </div>
      </div>
    </div>
  );
}
