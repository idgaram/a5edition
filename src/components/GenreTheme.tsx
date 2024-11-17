const GenreTheme = () => {
  return (
    <div className="sm:w-1/2 w-full flex ">
      <div className="flex flex-col gap-4 lg:px-8 w-full  ml-4">
        <h3 className="text-xl text-blue-400 px-4">Genres</h3>
        <ul className="sm:px-12 list-disc px-8">
          <li>Romans</li>
          <li>Témoignages</li>
          <li>Romans Jeunesse</li>
          <li>Policier</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl text-blue-400 px-4 mr-4">Thèmes</h3>
        <ul className="sm:px-12 list-disc px-8 ">
          <li>Romans</li>
          <li>Témoignages</li>
          <li>Romans Jeunesse</li>
          <li>Policier</li>
        </ul>
      </div>
    </div>
  );
};
export default GenreTheme;
