import Sedans from './componets/Sedans'
import Suvs from './componets/Suvs'
import Luxury from './componets/Luxury'

export default function App(){
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center intens-center">
      <section className="lg:flex max:w[920px]">
        <Sedans/>
        <Suvs/>
        <Luxury/>

      </section>
    </main>
  )
}