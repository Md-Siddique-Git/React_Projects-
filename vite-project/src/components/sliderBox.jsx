import data from "../components/data.json"
function Slider(){
   
    return (
        <>
        <div className="flex flex-col items-center  mt-5 ">
        <div className="h-72 text-center fixed justify-center  rounded-md w-11/12 bg-red-500">hello i am slider box</div>
        {
                    data.map((products, i) => (
                        <div key={i}>
                            <img className="  flex relative justify-center text-center h-24 w-24" src={products.img} alt="image" />
                           
                        </div>
                    )

                    )

                }
        </div>
        </>
    )
}



export default Slider