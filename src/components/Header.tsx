const Header = () => (
  <header className="flex flex-col items-center">
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <i className="fa-regular fa-envelope text-base" aria-hidden="true"></i>
          <p>tuhindas56dev@gmail.com</p>
        </div>
        <nav>
          <ul className="flex list-none gap-10 p-0">
            <li>
              <button className="cursor-pointer hover:underline">About</button>
            </li>
            <li>
              <button className="cursor-pointer hover:underline">Projects</button>
            </li>
            <li>
              <button className="cursor-pointer hover:underline">Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="mt-32 flex w-1/4 flex-col items-center text-center">
      <p className="text-xl">Hi! I'm Tuhin👋🏻</p>
      <h1 className="font- my-8 text-4xl">Website Developer.</h1>
      <p>
        I am a junior <span className="underline">Web developer</span>. I prioritize clean, efficient code and love
        bringing user-friendly designs to life.
      </p>
      <a
        href="https://drive.google.com/file/d/1Vh71nh1i2PXxrwrWLIMql7ypjCEzxks0/view?usp=sharing"
        className="mt-6 flex items-center gap-2 hover:underline"
      >
        Download CV
        <img src="/download.svg" aria-hidden="true"></img>
      </a>
    </div>
  </header>
)

export default Header
