import data from './data.json/'
export default function Cards() {
    return (
        <>
               
            
            
            <div className="m-10 flex  gap-3 text-center cards">
                {
                    data.map((products, i) => (
                        <div key={i}>
                            <img src={products.img} alt="image" />
                            <p>{products.description}</p>
                            <span className='bg-purple-500 text-white px-5 py-1 rounded-full'>{products.price}</span>
                        </div>
                    )

                    )

                }
            </div>
        </>
    )
}