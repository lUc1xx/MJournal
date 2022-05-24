import { IconButton } from '@material-ui/core';
import { BookmarkBorderOutlined, ModeCommentOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons';
import s from './index.module.scss';

const PostActions: React.FC = (): React.ReactElement => {
    return (
        <ul className={s.wrapper}>
            <li>
                <IconButton>
                    <ModeCommentOutlined />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepeatOutlined />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <BookmarkBorderOutlined />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareOutlined />
                </IconButton>
            </li>
        </ul>
    )
}
export default PostActions