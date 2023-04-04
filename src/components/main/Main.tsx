import React from 'react';
import s from './Main.module.scss'
import lock from '../../assets/image/mainImage/Vector.svg'
import {Figura} from '../../comman/components/figura/Figura';
import {Block} from '../../comman/components/Block/Block';
import builder from '../../assets/image/mainImage/builder.svg'
import binoculars from '../../assets/image/mainImage/binoculars.svg'
import calc from '../../assets/image/mainImage/calc.svg'
import compass from '../../assets/image/mainImage/compass.svg'

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.container}>
                <div className={s.imgBg}>
                </div>
                <div className={s.mainForm}>
                    <div className={s.mainHeader}>
                        <h2 >Кейс: дом из оцилиндрованного бруса <br/>
                            в Балашихе под ключ</h2>
                        <p>Двухэтажный дом, площадью 128 м² в европейском стиле</p>
                    </div>
                    <div className={s.formText}>
                        <div className={s.text}>
                            <h3>Хотите сотрудничать с профессионалами?</h3>
                            <p>Оставьте заявку и получите бесплатную консультацию</p>
                        </div>
                        <div>
                            <form className={s.form} action="">
                                <div className={s.formContainer}>
                                    <input type="text"/>
                                    <input type="text"/>
                                </div>
                              <div className={s.formContainer}>
                                  <select name="" id="">Выберите услугу</select>
                                  <button>Отправить</button>
                              </div>
                            </form>
                            <div className={s.formFooter}>
                                <img src={lock} alt=""/>
                                <p>Ваши данные не будут переданы третьим лицам</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={s.videoReviews}>
                    <Figura/>
                    <div className={s.block}>
                        <Block icon={calc}/>
                        <Block icon={binoculars}/>
                        <Block icon={compass}/>
                        <Block icon={builder}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;