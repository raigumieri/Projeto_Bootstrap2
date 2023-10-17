export default function Card(){
    return(
      <div className="mt-4 mb-4 d-md-flex flex-row justify-content-around">

          <div className="card col-md-5 mb-4">
            <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?2" alt="IMG2" />  

            <div className="card-body">
                <p className="card-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <a href="#" className="link-danger link-underline-opacity-0 text-center mb-4 ">Veja mais</a>
          </div>

        

        <div className="card col-md-5 mb-4">
          <img className="card-img-top w-100" src="http://lorempixel.com.br/330/170/?2" alt="IMG2" />
          
          <div className="card-body">
              <p className="card-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <a href="#" className="link-danger link-underline-opacity-0 text-center mb-4 "> Veja mais </a>
        </div>
    </div>
    );
}