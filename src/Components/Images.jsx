export default function Images(){
    return(
        <>
        <section>
            <img src="http://lorempixel.com.br/800/200/?1" className="img-fluid"/>

            <hr />

            <img src="http://lorempixel.com.br/300/200/?2" className="img-thumbnail" />

            <br />

            <figure>
                <img src="http://lorempixel.com.br/300/200/?3" className="rounded float-start img-fluid" />
                <img src="http://lorempixel.com.br/300/200/?4" className="rounded float-end img-fluid" />
            </figure>
        </section>
        
        </>
    );
}