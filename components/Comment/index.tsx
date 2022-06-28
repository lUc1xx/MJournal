import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import { MoreHorizOutlined } from "@material-ui/icons";
import { useState } from "react";
import s from './index.module.scss';

interface Props {
    user: {
        fullname: string
    }
    text: string
}

const Comment: React.FC<Props> = (props: Props): React.ReactElement => {
    const { user, text } = props;
    const [anchorEl, setAnchorEl] = useState<null>(null);

    const handleClick = (event: any): void => {
        setAnchorEl(event)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={s.comment}>
            <div className={s.userInfo}>
                <img
                    src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                    alt="avatar"
                />
                <b>Master Tass</b>
                <span>5 часов</span>
            </div>

            <Typography className={s.text}>
                Суперджет это ад адский, два раза летала и оба раза прощалась с жизнью.
                Трясет хуже, чем в копейке.
            </Typography>
            <span className={s.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreHorizOutlined />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={3}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}
export default Comment