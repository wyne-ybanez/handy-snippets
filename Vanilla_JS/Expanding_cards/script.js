const panels = document.querySelectorAll('.panel')

// Remove Active classes first, then add Active class on desired panel

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
