import { Container } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-center justify-between items-center p-4">
        <a href="#"
        className="flex items-center font-bold text-3xl md:text-xl">
            <Container className="mr-2" />
            Skouadio <span className="text-accent"> 225 </span>
        </a>

        <ul className="hidden md:flex space-x-4">
            <li>
                <a href="#" className="btn btn-sm btn-ghost"> Accueil </a>
            </li>

            <li>
                <a href="#" className="btn btn-sm btn-ghost"> A propos </a>
            </li>

            <li>
                <a href="#" className="btn btn-sm btn-ghost"> Mes experiences </a>
            </li>

            <li>
                <a href="#" className="btn btn-sm btn-ghost"> Education </a>
            </li>

            <li>
                <a href="#" className="btn btn-sm btn-ghost"> Mes projets </a>
            </li>

        </ul>
    </div>
  )
}

export default Navbar