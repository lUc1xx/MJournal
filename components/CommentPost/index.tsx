import { IconButton, Menu, MenuItem, Paper, Typography } from "@material-ui/core"
import { MoreVertOutlined } from "@material-ui/icons"
import { useState } from "react"


interface Props {
    user: {
        fullname: string
    }
    text: string
    post: {
        title: string
    }
}


const CommentPost: React.FC<Props> = (props: Props): React.ReactElement => {
    const { user, text, post } = props;
    const [anchorEl, setAnchorEl] = useState<null>(null);

    const handleClick = (event: any): void => {
        setAnchorEl(event)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Paper elevation={0}>
            <Typography variant="h6">
                <a href="#">{post.title}</a>
                <IconButton>
                    <MoreVertOutlined/>
                </IconButton>
            </Typography>
            <Typography>{text}</Typography>
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
        </Paper>
    )
}
export default CommentPost