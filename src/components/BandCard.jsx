function BandCard({ band, onClick }) {
    return (
      <button
        onClick={onClick}
        className="flex-none w-[260px] snap-start text-center text-white bg-black border border-black rounded-lg overflow-hidden hover:shadow-md transition"
      >
        <div className="w-full aspect-[4/4] overflow-hidden">
          <img src={band.photo} alt={band.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-black tracking-tight text-lg">{band.name}</h3>
        </div>
      </button>
    );
  }
  
  export default BandCard;  