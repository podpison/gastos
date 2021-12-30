import c from "./shopOwner.module.scss";
import img from "./../../../static/img/shopOwner.png";

export const ShopOwner = () => {
    return <div className={c.mainContainer}>
        <div className={c.aboutOwner}>
            <h2 className={c.header}>Здравствуйте! Меня зовут <span className={c.lightSign}>Кобылинский Кирилл</span>, и я являюсь <span className={c.lightSign}>основателем GastroChef</span></h2>
            <div className={c.text}>
                <p>Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в составе сборной украины</p>
                <p>у меня высшее образование национального универститета физического воспитания и спорта Украины, а так же в прошлом профессиональный фитнес тренер!</p>
            </div>
            <p className={c.footer}>И я хочу Вам рассказать побольше о GastroChef</p>
        </div>
        <div className={c.ownerImgContainer}>
            <img className={c.ownerImg} alt='' src={img} />
        </div>
    </div>
};