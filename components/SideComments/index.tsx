import { NavigateNextOutlined } from '@material-ui/icons';
import s from './index.module.scss';

const items: CommentItemProps[] = [
    {
        user: {
            fullname: "Вася пупкин"
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и ...",
        post: {
            title: 'Какая у вас дома ванна?'
        }
    },
    {
        user: {
            fullname: "Вася пупкин"
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и ...",
        post: {
            title: 'Какая у вас дома ванна?'
        }
    },
    {
        user: {
            fullname: "Вася пупкин"
        },
        text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и ...",
        post: {
            title: 'Какая у вас дома ванна?'
        }
    },
]

interface CommentItemProps {
    user: {
        fullname: string
    }
    text: string
    post: {
        title: string
    }
}

const CommentItem: React.FC<CommentItemProps> = (props: CommentItemProps): React.ReactElement => {
    const { user, text, post } = props;
    return (
        <div className={s.commentItem}>
            <div className={s.userInfo}>
                <img src="src" alt="alt" />
                <a href="#">
                    <b>{user.fullname}</b>
                </a>
            </div>
            <p className={s.text}>
                {text}
            </p>
            <a href='#'>
                <span className={s.postTitle}>
                    {post.title}
                </span>
            </a>
        </div>
    )
}


const SideComments: React.FC = (): React.ReactElement => {
    return (
        <div className={s.root}>
            <h3>
                Комментарии <NavigateNextOutlined />
            </h3>
            {items.map((obj) => (
                <CommentItem key={obj.user.fullname} {...obj}/>
            ))}
        </div>
    )
}
export default SideComments