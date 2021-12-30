import c from "./aboutGastroChef.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import img from "./../../../static/img/dish.png";

export const AboutGastroChef: React.FC = () => {
    return <div className={c.mainContainer}>
        <div className={c.aboutGastroChef}>
            <h2 className={c.header}>"GastroChef - легко для занятых"</h2>
            <div className={c.text}>
                <p>GastroChef - правильное питание с доставкой на дом, создана что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новый свершений и побед.</p>
                <p>Все продукты для приготовления правильного питания запускаются только с сертификатами, а рационы готовятся на современной и безопасной кухне перед приездом к Вам!</p>
                <p className={c.bold}>Друзья, если у Вас остались вопросы Вы с легкостью можете позонить нам или написать нам лично в Инстаграмм или Фейсбук</p>
            </div>
            <div className={c.footer}>
                <p className={c.bigSign}>С уважением, Кобылинский Кирилл.</p>
                <div className={c.socialMedia}>
                    <a href='https://www.instagram.com'><InstagramIcon /></a>
                    <a href='https://m.facebook.com'><FacebookIcon /></a>
                    <p> - Я в социальгых сетях</p>
                </div>
            </div>
        </div>
        <div className={c.imgContainer}>
            <img className={c.img} alt='' src={img} />
        </div>
    </div>
};