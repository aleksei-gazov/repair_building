import React from 'react';
import s from './Main.module.scss'
const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.container}>
                <div className={s.mainForm}>
                    <div className={s.mainHeader}>
                        <h1>Кейс: дом из оцилиндрованного бруса
                            в Балашихе под ключ</h1>
                        <p>Двухэтажный дом, площадью 128 м² в европейском стиле</p>
                    </div>
                    <div>
                        <div>
                            <h3>Хотите сотрудничать с профессионалами?</h3>
                            <p>Оставьте заявку и получите бесплатную консультацию</p>
                        </div>
                        <div>
                            <form action="">

                            </form>
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