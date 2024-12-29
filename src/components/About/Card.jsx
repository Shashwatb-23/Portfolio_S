
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Card(props) {
    return(
            <>
                <div className="grid justify-center justify-items-center ">
                

                    <div className="bg-slate-600 mx-20 p-3 px-7 py-7 mt-8 opacity-90 rounded-md mb-6 ">
                            <div className="flex justify-center">
                                <img src={`${props.img}`}  alt="" className="h-20 w-20 text-white"/>    
                            </div>

                            <div className="grid justify-items-center">
                                <h2 className="text-xl font-bold text-blue-400">{props.title}</h2>
                                <p className="text-sm font-normal pt-1">{props.desc}</p>
                            </div>
                        </div>
                    
                        
                </div>
            </>
    )
}

export default Card;