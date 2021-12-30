import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import c from "./footer.module.scss";

export const SocialMedia: React.FC = () => {
    return <div className={c.socialMedia}>
        <a href='https://www.instagram.com'><InstagramIcon /></a>
        <a href='https://m.facebook.com'><FacebookIcon /></a>
        <a href='https://web.telegram.org'><TelegramIcon /></a>
    </div>
};