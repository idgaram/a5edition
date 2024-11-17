import Image from "next/image";

const Nouveautes = () => {
  return (
    <div className="flex flex-col mt-8 py-8 px-16 min-h-[500px] ">
      <h2 className="text-3xl mb-8 lg:pb-0">Nouveauté</h2>
      <div className="flex lg:flex-row flex-col-reverse flex-1 gap-20 p-8 h-full">
        <div className="lg:basis-2/3 flex flex-col justify-center">
          <h3>Un soir d&quot;été en Sardaigne</h3>
          <p>
            Après des études de section « Classique » niveau BAC, Annette
            Lellouche a mené tambour battant ses affaires en région parisienne.
            Lorsque sonne l&quot;heure de la retraite, elle décide de
            s&quot;installer dans le Var pour y couler des jours tranquilles.
          </p>
          <br />
          <p>
            Au hasard d&quot;une rencontre avec un écrivain - poète, elle
            découvre le bonheur de l&quot;écriture. Son aventure littéraire
            débutera avec un recueil de nouvelles &quot;Entrez dans la
            danse&quot; . Quelques poésies s&quot;insèrent dans tous ces récits
            de « Femmes » où se mêlent l&quot;amitié, l&quot;amour, le rêve, les
            voyages.
          </p>
        </div>
        <div className="lg:basis-1/3 flex flex-col items-start relative h-[350px]">
          <Image
            src="/soir_d_ete_en_sardaigne.png"
            objectFit="contain"
            fill={true}
            alt="portrait d'annie"
            className=""
          />
        </div>
      </div>
    </div>
  );
};
export default Nouveautes;
