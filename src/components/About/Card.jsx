function Card(props) {
    return(
            <>
                <div className="grid justify-center justify-items-center">
  <div className="bg-slate-600 mx-4 md:mx-20 p-4 md:p-7 mt-8 opacity-90 rounded-md mb-6">
    <div className="flex justify-center">
      {/* Image */}
      <img
        src={`${props.img}`}
        alt=""
        className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover" // Improved image dimensions
      />
    </div>

    <div className="grid justify-items-center">
      {/* Title and Description */}
      <h2 className="text-xl font-bold text-blue-400">{props.title}</h2>
      <p className="text-sm font-normal pt-1 text-center">{props.desc}</p>
    </div>
  </div>
</div>

            </>
    )
}

export default Card;