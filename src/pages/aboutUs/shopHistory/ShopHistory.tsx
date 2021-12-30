import c from "./shopHistory.module.scss";
import teamImg from "./../../../static/img/team.jpg";
import packageImg from "./../../../static/img/package.png";

export const ShopHistory: React.FC = () => {
    return <div className={c.mainContainer}>
        <div className={c.aboutGastroChef}>
            <div className={c.imgContainer}>
                <img className={c.img} alt='' src={packageImg} />
            </div>
            <div className={c.text}>
                <h2 className={c.header}>История GastroChef началась более 6-ти лет назад...</h2>
                <div>
                    <p>Долгое время я наблюдал как людям не хватает времени для правильного и здорового питания, просто питания регулярного.</p>
                    <p>Они могли позавтракать в обед или съесть что-то типо шаурмы или снэка, а вечером в силу голода наеситься, что плохо сказывалось на их обмене веществ и ествественно здоровье</p>
                    <p>Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку еды правильного питания</p>
                    <p>Я со своим 17-летним опытом в спорте и проф. образовании, вместе с диетологом разработали рационы привального питания с подсчетом калорий</p>
                </div>
                <p className={c.footer}>Знакомтель! Команда GastroChef</p>
            </div>
        </div>
        <div className={c.teamImgContainer}>
            <img alt='' src={teamImg} />
        </div>
    </div>
};