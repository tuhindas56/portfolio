const header = document.querySelector("header")
const buttons = document.querySelectorAll(".links button")

buttons.forEach((button) => {
  button.onclick = () => {
    const destination = document.querySelector(`.${button.dataset.id}`)

    destination.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })
  }
})

const heroCallback = (entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? header.classList.remove("shown") : header.classList.add("shown")
  })
}

const heroOptions = {
  threshold: 0.4,
}

const heroObserver = new IntersectionObserver(heroCallback, heroOptions)
heroObserver.observe(document.querySelector("section.hero"))
