
import AboutProperty from './AboutProperty';
import Distance from './Distance';
import Icons from './Icons';
import Pictures from './Pictures';
import './_Accommodation.scss';

const Accommodation = () => {
    return (
        <section>
            <div className="accommodation">ACCOMMODATION</div>
            <Pictures />
            <Icons />
            <AboutProperty />
            <Distance />
        </section>
    )

}

export default Accommodation;