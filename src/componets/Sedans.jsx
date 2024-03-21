import iconSedans from '../assets/icon-sedans.svg'

export default function Sedans(){
    return(
  <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-lg">
    <img src={iconSedans} alt="Ícone de carros sedan" className="mb-7"/>
    <h2 className="font-showlders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
    <p className="font-lexend mb-7 text-white lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem</p>
    <a className=" font-lexend bg-white block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://www.webmotors.com.br/sedans/carros/estoque?estadocidade=estoque&necessidade=Sedans&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::sedans:comprar" target="_blank">Ver mais</a>
  </div>  
    )
}

