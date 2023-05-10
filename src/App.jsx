import { Post} from "./Post"
import { Header } from "./components/Header"

import "./style.css"
export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Vinicius Moreira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus quia consectetur atque veniam rerum! Voluptate exercitationem deleniti doloremque ullam facere excepturi ab omnis voluptas facilis, animi iure eos minus"
      />

      <Post 
        author="Rafael Castro"
        content="Outro post aqui"
      />
    </div>
  )
}

