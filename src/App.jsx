import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function App(){
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center intens-center">
      <section className="lg:flex">
        <div className="bg-orange p-12 rounded-t-lg">
            <img src={iconSedans} alt="Ícone de carros sedan" className="mb-7"/>
            <h2 className="font-showlders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
            <p className="font-lexend mb-7 text-white">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem</p>
        <a className=" font-lexend bg-white block px-10 py-3 w-fit rounded-3xl text-orange " href="https://www.webmotors.com.br/sedans/carros/estoque?estadocidade=estoque&necessidade=Sedans&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::sedans:comprar" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
            <img src={iconSuvs} alt="Ícone dos carros SUV" className="mb-7" />
            <h2 className=" font-showlders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUvs</h2>
            <p className="font-lexend mb-7 text-white">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-white block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs/carros/estoque?estadocidade=estoque&necessidade=SUVs&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::suvs:comprar" target="_blank">Ver mais</a>
          </div>

        <div className="bg-darck-green p-12 rounded-b-lg">
            <img src={iconLuxury} alt="Ícone dos carros de luxos" className="mb-7" />
            <h2 className="font-showlders mb-7 uppercase text-4xl font-bold text-offwhitebg" >Luxuosos</h2>
            <p className="font-lexend mb-7 text-white" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
            <a className="font-lexend bg-white block px-10 py-3 w-fit rounded-3xl text-darck-green" href="https://www.webmotors.com.br/carros-de-luxo/carros/estoque?estadocidade=estoque&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::carros-de-luxo:comprar" target="_blank">Ver mais</a>
            </div>

        
      </section>
    </main>
  )
}