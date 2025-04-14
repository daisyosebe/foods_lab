import Nav from "../../components/nav/Nav"
import Cover from "../../assets/images/cover.jpg"


export default function HomePage() {
    return (
      <>
      <h1>FOODS LAB</h1>
      <div class="flex">
      <img
        src={Cover}
        alt="Cookbook"
        class= "w-1/3 "
      />
      <Nav/>
      <h1>FOODS LAB</h1>
      </div>
      </>
    
    );
  }
  