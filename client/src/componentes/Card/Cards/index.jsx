import ItemCard from "../SingleCard";

const Card = () => {
  // **********
  // Por el momento, esto funciona como un placeholder
  // **********
  const data = [
    {
      id: 0,
      name: "Jhon",
      position: "Designer",
      logo: "https://picsum.photos/200",
    },
    {
      id: 1,
      name: "Carl",
      position: "Frontend",
      logo: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Doe",
      position: "Backend",
      logo: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Doe",
      position: "Backend",
      logo: "https://picsum.photos/200",
    },
    {
      id: 4,
      name: "Doe",
      position: "Backend",
      logo: "https://picsum.photos/200",
    }
  ];
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-evenly">
        
        {data.map(({ id }) => (
          <div key={id}>
            <ItemCard data={data[id]} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;