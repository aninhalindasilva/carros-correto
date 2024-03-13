import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function App(){
  return(
    <main>
      <section>
        <div>
            <img src={iconSedans} alt="Ícone de carros sedan" />
            <h2>Sedans</h2>
            <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem</p>
        <a href="https://www.webmotors.com.br/sedans/carros/estoque?estadocidade=estoque&necessidade=Sedans&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::sedans:comprar" target="_blank">Ver mais</a>
        </div>
        <div>
            <img src={iconSuvs} alt="Ícone dos carros SUV" />
            <h2>SUvs</h2>
            <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
            <a href="https://www.webmotors.com.br/suvs/carros/estoque?estadocidade=estoque&necessidade=SUVs&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::suvs:comprar" target="_blank">Ver mais</a>
            <div>
            <img src={iconLuxury} alt="Ícone dos carros de luxos" />
            <h2>Luxuosos</h2>
            <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
            <a href="https://www.webmotors.com.br/carros-de-luxo/carros/estoque?estadocidade=estoque&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::carros-de-luxo:comprar" target="_blank">Ver mais</a>
            </div>

        </div>
      </section>
    </main>
  )
}