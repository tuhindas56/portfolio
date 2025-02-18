import "./style.css"

const header = document.querySelector("header") as HTMLElement
const buttons = document.querySelectorAll(".links button") as NodeListOf<HTMLButtonElement>
const hero = document.querySelector("section.hero") as HTMLElement
const goToTop = document.querySelector('button[aria-label="go to top"]') as HTMLButtonElement

buttons.forEach((button) => {
  button.onclick = () => {
    const destination = document.querySelector(`.${button.dataset.id}`) as HTMLElement

    destination.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })
  }
})

const heroCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.remove("shown")
      goToTop.classList.remove("shown")
    } else {
      header.classList.add("shown")
      goToTop.classList.add("shown")
    }
  })
}

const heroOptions = {
  threshold: 0.4,
}

const heroObserver = new IntersectionObserver(heroCallback, heroOptions)
heroObserver.observe(hero)

goToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" })
