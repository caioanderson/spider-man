import { Button } from '../Button';
import './styles.scss';

// import spider from '../../assets/spider-man.png';
import spiderMan from '../../assets/homem-aranha.png';
import spiderText from '../../assets/spiderman-text.png';
import ps from '../../assets/ps.png';
import marvel from '../../assets/marvel.png';

export function Container() {
    return (
        <section className="container">
            <div className="content">
                <img className="arte-miles" src={spiderText} alt="Miles Morales - Spider man" />
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Iaculis velit magna vitae mauris orci fames posuere nibh.
                    Sit tellus amet facilisi sit odio pulvinar scelerisque quam et.
                    Ultrices facilisis nunc massa diam, quis mi imperdiet.
                </span>

                <div className="container-buttons">
                    <Button title='PRE-ORDER NOW'/>
                    <Button outline={true} title='WATCH THE TEASER'/>
                </div>

                <div className="socials">
                    <img src={ps} alt="PLaystation" />
                    <img src={marvel} alt="Marvel" />
                </div>

            </div>
            <img className="arte-spider" src={spiderMan} alt="Spider Man" />
        </section>
    );
}