//Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#first-section,
  #galery .galery-row-1,
  #galery .galery-row-2,
  #description .numbers,
  #description .description-text,
  #description .description-img,
  #week-rated .week-rated-title,
  #week-rated .astronauts,
  #best-artists .best-artists-title,
  #best-artists .artists-row-1,
  #best-artists .artists-row-2,
  #best-artists .see-artists,
  .logo-footer`,
  { interval: 100 }
)
