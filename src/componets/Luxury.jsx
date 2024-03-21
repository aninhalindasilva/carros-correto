import iconLuxury from '../assets/icon-luxury.svg'

export default function Luxury() {
    return (
    <div className="bg-darck-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg" >
        <img src={iconLuxury} alt="Ícone dos carros de luxos" className="mb-7" />
        <h2 className="font-showlders mb-7 uppercase text-4xl font-bold text-offwhitebg" >Luxury</h2>
        <p className="font-lexend mb-7 text-white lg:mb-20" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
        <a className="font-lexend bg-white block px-10 py-3 w-fit rounded-3xl text-darck-green border-2  border-whitebg hover:bg-darck-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-de-luxo/carros/estoque?estadocidade=estoque&necessidade=Carros%20de%20luxo&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::carros-de-luxo:comprar" target="_blank">Ver mais</a>
    </div>
    )
    }