
function ItemMenuCarrusel({ i, last }) {
  return (
    <span className='relative'>
      <a href={`${'#item' + i}`} className=" btn btn-xs bg-amber-200 hover:bg-amber-50 text-gray-600 rounded-full">{i}</a>
      {!last &&
        <hr className='absolute -bottom-1 h-px w-[20vw] mb-4 mt-0 bg-violet-300 border-0 -z-10' />
      }
    </span>
  )
}

const Carrusel = () => {
  return (
    <section>
      <div className="flex justify-around w-full py-2 gap-2 ">
        <ItemMenuCarrusel i={1} />
        <ItemMenuCarrusel i={2} />
        <ItemMenuCarrusel i={3} />
        <ItemMenuCarrusel i={4} />
        <ItemMenuCarrusel i={5} last={true} />
      </div>

      <div className="carousel carousel-vertical w-full h-96 rounded-md">
        <div id="item1" className="carousel-item h-full justify-center">
          <img src="/crossfit-ge803313e7_1280.jpg" className="w-[75vw] aspect-video object-cover rounded-md" />
        </div>
        <div id="item2" className="carousel-item h-full justify-center">
          <img src="/man-g1c6240b8f_1280.jpg" className="w-[75vw] aspect-video object-cover rounded-md" />
        </div>
        <div id="item3" className="carousel-item h-full justify-center">
          <img src="/weight-lifting-gd5a63555c_1920.jpg" className="w-[75vw] aspect-video object-cover rounded-md" />
        </div>
        <div id="item4" className="carousel-item h-full justify-center">
          <img src="/gym-g996b8d344_1280.jpg" className="w-[75vw] aspect-video object-cover rounded-md" />
        </div>
        <div id="item5" className="carousel-item h-full justify-center">
          <img src="/training-gf14f001d5_1280.jpg" className="w-[75vw] aspect-video object-cover rounded-md" />
        </div>
      </div>
    </section>
  )
}

export default Carrusel