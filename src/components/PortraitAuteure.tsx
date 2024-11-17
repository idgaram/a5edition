import Image from "next/image"

const PortraitAuteure = () =>{
    return (
        <div className="flex lg:items-start items-center lg:flex-row  flex-col gap-8">
        <Image
          src="/portrait-annie.png"
          height={660}
          width={720}
          alt="portrait d'annie"
          className="flex-1  xl:rounded-br-xl xl:rounded-tl-xl"
        />
        <div className="flex-1  px-8 sm:pt-28 mx-auto pr-12">
          <h1 className="text-3xl sm:text-5xl mb-4">Anette Lellouche</h1>
          <h2 className="text-xl sm:text-3xl mb-8">Auteure française</h2>
          <p className="text-lg mb-8">
            Après des études de section « Classique » niveau BAC, Annette
            Lellouche a mené tambour battant ses affaires en région
            parisienne. Lorsque sonne l&#34;heure de la retraite, elle
            décide de s&#34;installer dans le Var pour y couler des jours
            tranquilles.
          </p>
          <br />
          <p className="text-lg mb-8">
            Au hasard d&#34;une rencontre avec un écrivain - poète, elle
            découvre{" "}
            <span className="relative text-blue-400 ">
              le bonheur de l&#34;écriture
            </span>
            . Son aventure littéraire débutera avec un recueil de nouvelles
            &quot;Entrez dans la danse&quot; . Quelques poésies
            s&#34;insèrent dans tous ces récits de « Femmes » où se mêlent{" "}
            <span className="relative text-blue-400 ">
              l&#34;amitié, l&#34;amour, le rêve, les voyages.
            </span>
          </p>
        </div>
      </div>
    )
}

export default PortraitAuteure