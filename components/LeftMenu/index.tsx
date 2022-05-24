import { Button } from '@material-ui/core';
import { FormatListBulletedOutlined, SmsOutlined, TrendingUpOutlined, WhatshotSharp } from '@material-ui/icons';
import Link from 'next/link';
import s from './index.module.scss';

const menu = [
    { text: "Лента", icon: <WhatshotSharp />, path: "/" },
    { text: "Сообщения", icon: <SmsOutlined />, path: "/" },
    { text: "Рейтинг MJ", icon: <TrendingUpOutlined />, path: "/" },
    { text: "Подписки", icon: <FormatListBulletedOutlined />, path: "/" }
]


const LeftMenu: React.FC = (): React.ReactElement => {
    return (
        <div className={s.wrapper}>
            <ul className={s.menu}>
                {menu.map((item => (
                    <li key={item.path}>
                        <Link href={item.path}>
                            <Button>
                                {item.icon}
                                {item.text}
                            </Button>
                        </Link>
                    </li>
                )))}
            </ul>
        </div>
    )
}
export default LeftMenu