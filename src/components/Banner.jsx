import banner  from "../assets/banner.webp"

function Banner() {
  return (
    <div>
      <div className="relative  md:px-8">
        <div className=" max-w-full">
            <img src={banner} alt="" />
        </div>
        <div className="absolute top-0 lg:top-52 px-20">
          <h2 className="text-2xl capitalize font-bold">
                Grab Up to 50% off on selected products
          </h2>
          <button className=" bg-[#004D75] text-white rounded-full px-3 py-1 lg:mt-7">Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Banner