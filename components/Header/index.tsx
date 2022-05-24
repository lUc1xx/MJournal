import { Avatar, Button, IconButton, Paper } from "@material-ui/core"
import { ExpandMoreOutlined, Menu, NotificationsNoneOutlined, SearchOutlined, SmsOutlined } from "@material-ui/icons"
import Link from "next/link"
import s from './index.module.scss';

const Header: React.FC = (): React.ReactElement => {
    return (
        <Paper elevation={0} className={s.wrapper}>
            <div className={s.block}>
                <IconButton>
                    <Menu />
                </IconButton>
                <Link href="/">
                    <a>
                        <img height={35} src="/static/img/logo.svg" alt="alt" />
                    </a>
                </Link>

                <div className={s.search}>
                    <SearchOutlined />
                    <input type="text" placeholder="Поиск" />
                </div>

                <Button variant="contained" className={s.penButton}>

                </Button>
            </div>

            <div className={s.block}>
                <IconButton>
                    <SmsOutlined />
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlined />
                </IconButton>
                <Link href="/profile/1">
                    <a href="#">
                        <Avatar
                            className={s.avatar}
                            alt="alt"
                            src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                        />
                        <ExpandMoreOutlined />
                    </a>
                </Link>
            </div>

        </Paper>
    )
}
export default Header