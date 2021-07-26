import './main.scss';
import ButtonStandart from "../../components/buttons/button-standart";

export default function Main(){
    return (
        <main>
            <section className="section-standart">
                <article className="flex-center">
                    <ButtonStandart/>
                </article>
                <article className="flex-around">
                    <ButtonStandart/>
                    <ButtonStandart/>
                </article>
            </section>
            <section className="section-special">
                <article className="article-special">
                    <div className="article-special__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur dolores error excepturi incidunt maiores natus nesciunt quibusdam repellat Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolores error excepturi incidunt
                        maiores natus nesciunt quibusdam repellat Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur dolores error excepturi incidunt maiores natus nesciunt quibusdam repellat
                    </div>
                    <div className="article-special__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur dolores error excepturi incidunt maiores natus nesciunt quibusdam repellat Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolores error excepturi incidunt
                        maiores natus nesciunt quibusdam repellat Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur dolores error excepturi incidunt maiores natus nesciunt quibusdam repellat
                    </div>
                </article>
                <article className="flex-start">
                    <ButtonStandart/>
                </article>
                <article className="flex-center">
                    <ButtonStandart/>
                </article>
                <article className="flex-end">
                    <ButtonStandart/>
                </article>
            </section>
        </main>
    )
}