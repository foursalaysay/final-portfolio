

const Links = () => {

  const items = [
    "HomePage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
]
  return (
    <div className="links">
        {items.map(item =>{
            <a href={`#${item}`} key={item}>{item}</a>
        {item}
        })}
    </div>
  )
}

export default Links