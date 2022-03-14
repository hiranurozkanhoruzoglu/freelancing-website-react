import Design from './design';
import design1 from "../images/Material.png";
import design2 from "../images/Account.png";
import design3 from "../images/CanvaApp.png";
import design4 from "../images/images.png";
import design5 from "../images/graphic.png";
import design6 from "../images/webes.png";


function Designs(props) {
    return (
        <div className="cards-design">
            <Design
                image={design1}
                alt="design 1"
                title="Logo Design"
                text="Need a professional logo with wriying underneath for our jewellery company" 
                price = "$ 500"
                link = "Apply now"
                
            />
            <Design
                image={design2}
                alt="design 2"
                title="Graphic Design"
                text="We need a graphic designer with UI/UX skills for our Furniture company" 
                price = "$ 500"
                link = "Apply now"
                
            />
            <Design
                image={design3}
                alt="design 3"
                title="Need a SEO"
                text="Need a SEO for our company who will let our company to a higher level" 
                price = "$ 300"
                link = "Apply now"
                
            />
             <Design
                image={design4}
                alt="design 4"
                title="Need a SEO"
                text="Need a SEO for our company who will let our company to a higher level" 
                price = "$ 200"
                link = "Apply now"
                
            />
             <Design
                image={design5}
                alt="design 5"
                title="Need a SEO"
                text="Need a SEO for our company who will let our company to a higher level" 
                price = "$ 700"
                link = "Apply now"
                
            />
             <Design
                image={design6}
                alt="design 6"
                title="Need a SEO"
                text="Need a SEO for our company who will let our company to a higher level" 
                price = "$ 300"
                link = "Apply now"
                
            />
        </div>
    )
}

export default Designs;