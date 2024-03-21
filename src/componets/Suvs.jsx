
import iconSuvs from '../assets/icon-suvs.svg'

export default function Sedans(){
  return(
<div className="bg-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
    <img src={iconSuvs} alt="Ícone dos carros SUV" className="mb-7" />
    <h2 className=" font-showlders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUvs</h2>
    <p className="font-lexend mb-7 text-white lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
    <a className="font-lexend bg-white block px-10 py-3 w-fit rounded-3xl text-green border-2  border-whitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs/carros/estoque?estadocidade=estoque&necessidade=SUVs&idcmpint=t1:c17:m07:portal-ofertas:busque-por-categorias::suvs:comprar" target="_blank">Ver mais</a>
</div> 
)
}