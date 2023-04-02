import React from 'react';
import s from './Main.module.scss'
import lock from '../../assets/image/mainImage/Vector.svg'
const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.container}>
                <div className={s.mainForm}>
                    <div className={s.mainHeader}>
                        <h1>Кейс: дом из оцилиндрованного бруса <br/>
                            в Балашихе под ключ</h1>
                        <p>Двухэтажный дом, площадью 128 м² в европейском стиле</p>
                    </div>
                    <div>
                        <div className={s.formText}>
                            <h3>Хотите сотрудничать с профессионалами?</h3>
                            <p>Оставьте заявку и получите бесплатную консультацию</p>
                        </div>
                        <div>
                            <form action="">
                                <input type="text"/>
                                <input type="text"/>
                                <select name="" id="">Выберите услугу</select>
                                <button>Отправить</button>
                            </form>
                            <div>
                                <img src={lock} alt=""/>
                                <p>Ваши данные не будут переданы третьим лицам</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={s.videoReviews}>

                </div>
            </div>
        </main>
    );
};

export default Main;